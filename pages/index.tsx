import { async } from '@firebase/util';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { ContentEditorPOC } from '../components/content-editor/PoC/ContentEditorPoC';
import { LectureInfo } from '../util/createNewLecture';
import { getAllLecture } from '../util/getAllLecture';
import { MarkdownViewer } from '../components/content-editor/MarkdownViewer';
import Link from 'next/link';

const Home: NextPage = () => {

  const [lectures, setLectures] = useState<LectureInfo[]>([])

  useEffect(() => {

    loadPosts()

  }, [])

  const loadPosts = async () => {
    setLectures(await getAllLecture())
  }

  return (
    <div >

      {
        lectures.map((lecture, i) => (
          <div key={i}>
            <Link href={`/lecture/${lecture.id}`}>
              <a>
                {lecture.title}
              </a>
            </Link>
          </div>
        ))
      }

    </div>
  )
}

export default Home
