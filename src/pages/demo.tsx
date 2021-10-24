import * as React from 'react';
import {useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';


interface Props {
  code: string;
}

const Code = (props: any) => {
  return (
    <SyntaxHighlighter showLineNumbers={false}
                       startingLineNumber={0}
                       language={props.lang}
                       style={darcula}
                       lineNumberStyle={{color: '#ddd', fontSize: 16}}
                       wrapLines={true}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

const Demo: React.FunctionComponent<Props> = (props) => {

  const [codeVisible, setCodeVisible] = useState(false);
  return (
    <div>
      <div className="example">
        {props.children}
      </div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
        {
          codeVisible &&
          <Code lang="jsx">
            {props.code}
          </Code>
        }
      </div>
    </div>
  );
};
export default Demo;