'use client';
import Image from "next/image";
import styles from "./page.module.css";
import TextField from '@mui/material/TextField';
import Slider from "@mui/material/Slider";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CodeEditor from '@uiw/react-textarea-code-editor';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from "react";

export default function Home() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };


  const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

  const [codeString, setCodeString] = useState("void int function");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeProvider theme={theme}>
          <TextField
            multiline 
            style={{backgroundColor: "gray", borderRadius: "5px", width: value*10}}
            focused
            color="primary"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCodeString(event.target.value);
            }}
          />
        </ThemeProvider>

        
        <SyntaxHighlighter language="cpp" style={docco}>
      {codeString}
    </SyntaxHighlighter>
        
      </main>


      <footer className={styles.footer}>
        <div
          style={{width: "1000px"}}
        >
          <Slider
            value={value}
            onChange={handleChange}
          />
        </div>
        
      </footer>
    </div>
  );
}
