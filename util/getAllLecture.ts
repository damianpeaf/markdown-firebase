import { collection, getDocs } from 'firebase/firestore';
import { FirebaseDB } from '../firebase/config';
import { LectureInfo } from './createNewLecture';

export const getAllLecture = async () => {

    try {

        const lectureCollectionRef = collection(FirebaseDB, 'lecture');
        const lectureDocs = await getDocs(lectureCollectionRef);

        const lectures = lectureDocs.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as LectureInfo[];

        if (!lectures) {
            return [];
        }

        console.log(lectures)


        return lectures;

    } catch (error) {
        console.log(error)
        return []
    }

}