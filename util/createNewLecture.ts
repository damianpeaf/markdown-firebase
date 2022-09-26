import { addDoc, collection } from "firebase/firestore";
import { FirebaseDB } from '../firebase/config';



export type LectureInfo = {
    id?: string;
    title: string;
    markdown: string;
}

export const createNewLecture = async (data: LectureInfo) => {
    try {

        const newLectureDoc = await addDoc(collection(FirebaseDB, "lecture"), data);

        console.log('Lecture created successfully', newLectureDoc);

    } catch (error) {
        console.log(error)
    }
}