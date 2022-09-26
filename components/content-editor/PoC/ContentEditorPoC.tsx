import { ChangeEvent, FormEvent, useState } from "react";
import { MarkdownViewer } from "../MarkdownViewer";
import { MarkdownEditor } from "../MarkdownEditor";

import styles from "./ContentEditorPoC.module.scss";
import { signInGoogle } from '../../../firebase/provider';
import { createNewLecture, LectureInfo } from '../../../util/createNewLecture';

const stringExample = `
# Titulo
## subtitulo


* Elemento 1
* Elemento 2

<br>


<p>Ejemplo parrafo y etiquetas html</p>

<br>

\`\`\`js
console.log('Hola mundo!')
\`\`\`

`;

export const ContentEditorPOC = () => {
  const [markdownString, setMarkdownString] = useState<string>(stringExample);
  const [lecture, setlecture] = useState('')


  const handleLectureChanged = (event: ChangeEvent<HTMLInputElement>) => {

    setlecture(event.target.value)

  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lectureInfo: LectureInfo = {
      title: lecture,
      markdown: markdownString
    }


    createNewLecture(lectureInfo)
  };

  const onLogin = () => {
    signInGoogle()
  }

  return (
    <>
      <button onClick={() => onLogin()}>Iniciar sesión</button>

      <form onSubmit={handleSubmit}>
        <button>Crear post</button>
        <input type="text" name="post-name" placeholder="Nombre del post" value={lecture} onChange={handleLectureChanged} />
        <div className={styles["markdown-poc"]}>
          <div className={styles["markdown-poc__item"]}>
            <h2>Editor</h2>
            <MarkdownEditor markdownString={markdownString} setMarkdownString={setMarkdownString} />
          </div>
          <div className={styles["markdown-poc__item"]}>
            <h2>This how would look like:</h2>
            <div className={styles["markdown-poc__viewer"]}>
              <MarkdownViewer markdownString={markdownString} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
