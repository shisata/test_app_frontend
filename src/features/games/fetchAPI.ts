// A mock function to mimic making an async request for data
import {Game} from "../../interfaces/Game"
export function fetchFake() {
    return new Promise<Game[]>((resolve) =>{
        
        const game1: Game = {
            address: "adress1",
            numOfPeople: 1,
            date: "date1",
            num: 69,
        }
        const game2: Game = {
            address: "adress2",
            numOfPeople: 1,
            date: "date2",
            num: 69,
        }

        const result: Game[] = [game1, game2];

        setTimeout(() => resolve(result), 500)
    })
}