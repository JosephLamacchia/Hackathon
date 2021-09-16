import Button1 from '../sounds/Button1.wav'
import Button2 from '../sounds/Button2.wav'
import GameOver from '../sounds/GameOver.wav'


const AudioPlayer = {
    gameOver() {
        let a = new Audio(GameOver);
        a.play()
    },
    buttonClick1() {
        let a = new Audio(Button1);
        a.play()
    },
    buttonClick2() {
        let a = new Audio(Button2);
        a.play()
    }
}
export default AudioPlayer