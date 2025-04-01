import { Document, Schema, model } from 'mongoose';
import { IReaction } from './reaction';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: IReaction[];
}

const ThoughtSchema = new Schema<IThought>(
    {
        thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
        createdAt: {type: Date, default: Date.now, get: (createdAtVal) => dateFormat(createdAtVal)},
        username: {type: String, required: true},
        reactions: [ReactionSchema],
    }