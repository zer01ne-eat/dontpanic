import React, { FC, useState, useRef, useEffect } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { useSetRecoilState } from 'recoil';
import { userDataState, navbarState, projectIconState, currentProjectState } from '@store/basic';
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
    const currentProject = useRecoilValue(currentProjectState);
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

    document.getElementById(currentProject)!.style.border = 'solid 3px #5485ff';

    }, [htmlEditorLoaded, cssEditorLoaded, jsEditorLoaded, userData.nickname, projectId]);
  
    return (
      <>
        <div id='html' style={{ width: "546px", float: "left", overflow: "hidden"}}>
          <div style={{color: "#fff", fontSize: "40px", textAlign: "center", fontFamily: "NSD-Regular"}}>HTML</div>
          <Editor
            height="95%"
            defaultLanguage="html"
            theme="vs-dark"
            defaultValue="// Welcome to My Editor"
            onMount={handleHtmlEditorDidMount}
          />
        </div>
        <div id='css' style={{ width: "546px", float: "left" }}>
        <div style={{color: "#fff", fontSize: "40px", textAlign: "center", fontFamily: "NSD-Regular"}}>CSS</div>
          <Editor
            height="95%"
            defaultLanguage="css"
            theme="vs-dark"
            defaultValue="// Welcome to My Editor"
            onMount={handleCssEditorDidMount}
          />
        </div>
        <div id='js' style={{ width: "546px", float: "left" }}>
        <div style={{color: "#fff", fontSize: "40px", textAlign: "center", fontFamily: "NSD-Regular"}}>Javascript</div>
          <Editor
            height="95%"
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
