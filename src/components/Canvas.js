import React, { useRef, useEffect, useState } from 'react'

const Canvas = (props) => {
    const canvasRef = useRef(null)
    const [context, setContext] = useState(null)

    let Player1 = {
        x: 15,
        y: 100,
        width: 15,
        height: 100,
        y_vel: 2,
        draw(ctx) {
            this.x = (ctx.canvas.width/2 + 10) + 15
            ctx.fillStyle = 'white'
            ctx.fillRect(this.x, this.y, this.width, this.height)   
        },
        update(ctx, keys) {
            this.draw(ctx)

            if(keys['w']) {
                this.y -= this.y_vel
            }
            if(keys['s']) {
                this.y += this.y_vel
            }
        }
    }

    let Player2 = {
        x: 1200,
        y: 15,
        width: 15,
        height: 100,
        draw(ctx) {
            this.x = ctx.canvas.width - 42.5
            ctx.fillStyle = 'white'
            ctx.fillRect(ctx.canvas.width - 42.5, this.y, this.width, this.height)   
        },
        update(ctx, worldOffsetX) {
            this.draw(ctx, worldOffsetX)

            this.y = (Ball.y - this.height/2)
        }
    }

    let Ball = {
        x: 300,
        y: 100,
        startingX: 300,
        startingY: 100,
        width: 15,
        height: 15,
        x_vel: 2,
        y_vel: 2,
        draw(ctx, worldOffsetX) {
            ctx.fillStyle = 'white'
            ctx.fillRect(Ball.x + worldOffsetX, Ball.y, Ball.width, Ball.height)
        },
        collidingWith(player, worldOffsetX) {
            return (this.x + worldOffsetX < player.x + player.width &&
                    this.x + this.width + worldOffsetX > player.x &&
                    this.y < player.y + player.height &&
                    this.y + this.height > player.y)
        },
        update(ctx, worldOffsetX) {
            this.draw(ctx, worldOffsetX)

            if(this.x < 0 || this.x + this.width > worldOffsetX) {
                this.x < 0 ? Scoreboard.score[1]++ : Scoreboard.score[0]++
                this.x_vel = 2
                this.y_vel = 2
                Player1.y_vel = 2
                this.x = 300
                this.y = 100
            }

            if(this.collidingWith(Player1, worldOffsetX) || this.collidingWith(Player2, worldOffsetX)) {
                if (this.x_vel < 0) this.x_vel--
                if (this.x_vel > 0) this.x_vel++
                if (this.y_vel < 0) this.y_vel--
                if (this.y_vel > 0) this.y_vel++
                Player1.y_vel++

                this.x_vel = -this.x_vel
                this.y_vel = -this.y_vel
            }

            if(this.y < 0 || this.y + this.height > ctx.canvas.height) {
                Player1.y_vel++
                if (this.y_vel < 0) this.y_vel--
                if (this.y_vel > 0) this.y_vel++
                this.y_vel = -this.y_vel
            }
    
            this.x += this.x_vel
            this.y += this.y_vel
        }
    }

    let Scoreboard = {
        x: 550,
        y: 100,
        score: [0, 0],
        width: 0,
        height: 0,
        draw(ctx) {
            this.x = (ctx.canvas.width - ctx.canvas.width / 3.7)

            ctx.fillStyle = 'white'
            ctx.font = "50px Arial"
            ctx.fillText(`${this.score[0]}`, this.x, this.y)
            ctx.fillText(`${this.score[1]}`, this.x + 100, this.y)
        }
    }
    
    function loadingAnimation(ctx, frameCount, message) {
        let width = ctx.canvas.width
        let height = ctx.canvas.height

        ctx.fillStyle = 'black'
        ctx.globalAlpha = 0.8
        ctx.fillRect(0, 0, (width/2)-10, height)

        ctx.beginPath()
        ctx.globalAlpha = 1
        ctx.arc((width/4), (height/2)-50, 70, frameCount[0], frameCount[1]*Math.PI)
        ctx.strokeStyle = '#DDA74F'
        ctx.lineWidth = 5
        ctx.stroke()

        ctx.fillStyle = '#DDA74F'
        ctx.font = '35px Arial bold'
        ctx.globalAlpha = (Math.abs(frameCount[2]/100))
        ctx.fillText(message, (width/4)-100, (height/2)+70)
    }

    const draw = (frameCount, keys) => {
        let world = context.canvas
        let worldVal = world.value

        if(world.style.display == "inline") {
            context.clearRect(0, 0, world.width, world.height);

            // loading animation
            loadingAnimation(context, frameCount, worldVal)
    
            // game
            let worldOffsetX = world.width/2 + 10
    
            context.fillStyle = 'black'
            context.globalAlpha = 1
        
            // background
            context.fillRect(worldOffsetX, 0, world.width, world.height)

            // ball
            Scoreboard.draw(context, worldOffsetX)
            Ball.update(context, worldOffsetX)
            Player1.update(context, keys)
            Player2.update(context, worldOffsetX)
        }
    }

    useEffect(() => { // initialize canvas
        if(canvasRef.current) {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            setContext(ctx)

            const sumContainer = document.getElementById('sumContainer')
            canvas.width = sumContainer.offsetWidth
            canvas.height = sumContainer.offsetHeight

            window.addEventListener('resize', () => {
                canvas.width = sumContainer.offsetWidth
                canvas.height = sumContainer.offsetHeight
            })
        }
    }, [])


    let keys = []
    useEffect(() => {
        let frameCount = [0, 0, 0]
        let fadeSpeed = 1
        let animationFrameId

        window.addEventListener('keydown', evt => {
            keys[evt.key] = true
        })
        window.addEventListener('keyup', evt => {
            keys[evt.key] = false
        })

        if(context) {
            const render = () => {
                frameCount[0] < (2*Math.PI) ? frameCount[0] += 0.07 : frameCount[0] = 0
                frameCount[1] < 2 ? frameCount[1] += 0.01 : frameCount[1] = 0
                frameCount[2] += fadeSpeed
                
                if(frameCount[2] > 100 || frameCount[2] < 0) fadeSpeed = -fadeSpeed

                draw(frameCount, keys)
                animationFrameId = window.requestAnimationFrame(render)
            };
            render()
        }
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw, context])

    return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;