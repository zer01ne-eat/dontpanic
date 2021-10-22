import React, { FC, useState, useRef, useEffect } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { useSetRecoilState } from 'recoil';
import { userDataState, navbarState, projectIconState } from '@store/basic';
import firebase from 'firebase';
import { useRecoilValue } from 'recoil';
import { fromMonaco } from "@hackerrank/firepad";

interface Props {
  projectId: string;
}

const CodeShare: FC<Props> = ({ projectId }) => {
    const [htmlEditorLoaded, setHtmlEditorLoaded] = useState(false);
    const [cssEditorLoaded, setCssEditorLoaded] = useState(false);
    const [jsEditorLoaded, setJsEditorLoaded] = useState(false);
    const setShowNavBar = useSetRecoilState(navbarState);
    const setProjectShow = useSetRecoilState(projectIconState);
    const userData = useRecoilValue(userDataState);

    const htmlEditorRef = useRef(null);
    const cssEditorRef = useRef(null);
    const jsEditorRef = useRef(null);

    setShowNavBar(false);
    setProjectShow(false);

    function handleHtmlEditorDidMount(editor: any, monaco: Monaco) {
      htmlEditorRef.current = editor;
      setHtmlEditorLoaded(true);
    }
  
    function handleCssEditorDidMount(editor: any, monaco: Monaco) {
      cssEditorRef.current = editor;
      setCssEditorLoaded(true);
    }
  
    function handleJsEditorDidMount(editor: any, monaco: Monaco) {
      jsEditorRef.current = editor;
      setJsEditorLoaded(true);
    }
  
    useEffect(() => {
      if (
        !htmlEditorLoaded ||
        !cssEditorLoaded ||
        !jsEditorLoaded ||
        projectId === ""
      ) {
        // If editor is not loaded return
        return;
      }
      const projectDBRef = firebase.database().ref().child(projectId);
  
      const htmlCodeDBRef = projectDBRef.child("html");
      const cssCodeDBRef = projectDBRef.child("css");
      const jsCodeDBRef = projectDBRef.child("js");
  
      const htmlFirePad = fromMonaco(htmlCodeDBRef, htmlEditorRef.current!);
      const cssFirePad = fromMonaco(cssCodeDBRef, cssEditorRef.current!);
      const jsFirePad = fromMonaco(jsCodeDBRef, jsEditorRef.current!);
  
      htmlFirePad.setUserName(userData.nickname);
      cssFirePad.setUserName(userData.nickname);
      jsFirePad.setUserName(userData.nickname);
    }, [htmlEditorLoaded, cssEditorLoaded, jsEditorLoaded, userData.nickname, projectId]);
  
    return (
      <>
        <div style={{ width: "30vw", float: "left" }}>
          <Editor
            height="90vh"
            defaultLanguage="html"
            theme="vs-dark"
            defaultValue="// Welcome to My Editor"
            onMount={handleHtmlEditorDidMount}
          />
        </div>
        <div style={{ width: "30vw", float: "left" }}>
          <Editor
            height="90vh"
            defaultLanguage="css"
            theme="vs-dark"
            defaultValue="// Welcome to My Editor"
            onMount={handleCssEditorDidMount}
          />
        </div>
        <div style={{ width: "30vw", float: "left" }}>
          <Editor
            height="90vh"
            defaultLanguage="javascript"
            theme="vs-dark"
            defaultValue="// Welcome to My Editor"
            onMount={handleJsEditorDidMount}
          />
        </div>
      </>
    );
  };

export default CodeShare;
