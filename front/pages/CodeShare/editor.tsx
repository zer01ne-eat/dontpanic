import React, { Dispatch, FC, SetStateAction } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import styles from "./editor.module.css";

interface Props {
    height: string;
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
}
interface EditorProps {
    mode: string;
    title: string;
    height: string;
    onChange: Dispatch<SetStateAction<string>>;
    value: string;
}
export const JavascriptEditor: FC<Props> = ({...props}) => {
    return <Editor mode="javascript" title={"JS"} {...props} />;
  };
  
export const HtmlEditor: FC<Props> = ({...props}) => {
    return <Editor mode="html" title={"HTML"} {...props} />;
  };
  
export const CssEditor: FC<Props> = ({...props}) => {
    return <Editor mode="css" title={"CSS"} {...props} />;
  };
  
const Editor: FC<EditorProps> = ({ mode, onChange, value, title, height }) => {
    return (
<div className={styles.editorContainer}>
      <div className={styles.editorTitle}>{title}</div>
      <AceEditor
        mode={mode}
        theme="mode-lucene"
        name={title}
        onChange={onChange}
        fontSize={18}
        width={"100%"}
        height={height}
        value={value}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        setOptions={{ useWorker: false }}
      />
    </div>
    );
};