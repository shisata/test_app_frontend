// improt {Schema, model} from "mongoose";

export interface Game{
    address: string;
    numOfPeople: number;
    date: string;
    num: number;
}

// const GameSchema = new Schema<Game>({
// })

// export default model<Game>('Game', GameSchema)