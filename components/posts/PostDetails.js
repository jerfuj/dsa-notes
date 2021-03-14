import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import styles from './PostDetails.module.css';

SyntaxHighlighter.registerLanguage('js', js);


const PostDetails = ({ postData }) => {
  const imgSrc = `/images/${postData.image}`;

  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          language={language}
          children={value}
          style={coldarkDark}
          className={styles.code}
        />
      )
    }
  }

  return (
    <div className={styles.container}>
      <h1>{postData.title}</h1>
      <ReactMarkdown renderers={customRenderers}>
        {postData.content}
      </ReactMarkdown>

    </div>
  )
};

export default PostDetails;