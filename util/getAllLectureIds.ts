import { collection, getDocs } from 'firebase/firestore';
import { FirebaseDB } from '../firebase/config';

export const getAllLectureIds = async () => {

    try {

        const lectureCollectionRef = collection(FirebaseDB, 'lecture');
        const lectureDocs = await getDocs(lectureCollectionRef);

        const lectures = lectureDocs.docs.map(doc => (doc.id)) as string[];

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