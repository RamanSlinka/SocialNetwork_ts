import React, {useState, useEffect, FC} from 'react'
import style from "./Music.module.scss"
import styleCommon from '../Common/SCSS/button.module.scss'


const useMultiAudio = (urls:any) => {
    const [sources] = useState(
        urls.map((url: any)  => {
            return {
                url,
                audio: new Audio(url),
            }
        }),
    )

    const [players, setPlayers] = useState(
        urls.map((url: any) => {
            return {
                url,
                playing: false,
            }
        }),
    )

    const toggle = (targetIndex: number) => () => {
        const newPlayers = [...players]
        const currentIndex = players.findIndex((p: any) => p.playing === true)
        if (currentIndex !== -1 && currentIndex !== targetIndex) {
            newPlayers[currentIndex].playing = false
            newPlayers[targetIndex].playing = true
        } else if (currentIndex !== -1) {
            newPlayers[targetIndex].playing = false
        } else {
            newPlayers[targetIndex].playing = true
        }
        setPlayers(newPlayers)
    }

    useEffect(() => {
        sources.forEach((source: any, i: number) => {
            players[i].playing ? source.audio.play() : source.audio.pause()
        })
    }, [sources, players])

    useEffect(() => {
        sources.forEach((source: any, i: number) => {
            source.audio.addEventListener('ended', () => {
                const newPlayers = [...players]
                newPlayers[i].playing = false
                setPlayers(newPlayers)
            })
        })
        return () => {
            sources.forEach((source: any, i:number) => {
                source.audio.removeEventListener('ended', () => {
                    const newPlayers = [...players]
                    newPlayers[i].playing = false
                    setPlayers(newPlayers)
                })
            })
        }
    }, [])

    return [players, toggle]
}

const MultiPlayer:FC<any> = ({ urls }) => {
    const [players, toggle] = useMultiAudio(urls)

    return (
        <div>
            {players.map((player: any, i:number) => (
                <Player key={i} player={player} toggle={toggle(i)} />
            ))}
        </div>
    )
}

const Player:FC<any> = ({ player, toggle }) => (
    <div className={style.trackWrapper}>
        <p className={style.track}>Stream music</p>
        <button className={styleCommon.button}
            onClick={toggle}
        >{player.playing ? 'Pause' : 'Play'}
        </button>


    </div>
)


export default MultiPlayer