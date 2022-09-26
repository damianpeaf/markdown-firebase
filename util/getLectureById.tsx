import { doc, getDoc } from "firebase/firestore"
import { FirebaseDB } from '../firebase/config';
import { LectureInfo } from './createNewLecture';



export const getLectureById = async (id: string) => {

    try {

        const docRef = await doc(FirebaseDB, 'lecture', id);
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return docSnap.data() as LectureInfo
        }
        else {
            return {} as LectureInfo
        }


    } catch (error) {
        console.log(error)
        return {} as LectureInfo

    }

}