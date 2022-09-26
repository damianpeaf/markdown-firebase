

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { LectureInfo } from '../../util/createNewLecture'
import { getAllLectureIds } from '../../util/getAllLectureIds'
import { getLectureById } from '../../util/getLectureById'
import { MarkdownViewer } from '../../components/content-editor/MarkdownViewer';

type Props = {
    lecture: LectureInfo
}

const LecturePage: NextPage<Props> = ({ lecture }) => {
    return (
        <div>
            <h1>{lecture.title}</h1>
            <MarkdownViewer markdownString={lecture.markdown} />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const lectureIds = await getAllLectureIds()


    return {
        paths: lectureIds.map(id => (
            {
                params: { id }
            }
        )),
        // *ISG

        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {



    const { id } = params as { id: string };

    const lecture = await getLectureById(id)

    // // *ISG
    // if (!lecture) {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false
    //         }
    //     }
    // }

    return {
        props: {
            lecture
        },
        // *ISR
        revalidate: 86400
    }
}


export default LecturePage;
