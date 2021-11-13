import styled from 'styled-components';
import tw from 'twin.macro';

export const MarkdownRenderer = styled.div`
  ${tw`flex flex-col w-full p-5 sm:p-10 leading-6 break-all`}

  p {
    ${tw`py-2`}
  }

  h1,
  h2,
  h3 {
    ${tw`mb-5 font-bold`}
  }

  * + h1,
  * + h2,
  * + h3 {
    ${tw`mt-10`}
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    ${tw`mt-0`}
  }

  h1 {
    ${tw`text-4xl`}
  }

  h2 {
    ${tw`text-3xl`};
  }

  h3 {
    ${tw`text-2xl`}
  }

  // Adjust Quotation Element Style
  blockquote {
    ${tw`my-5 py-1 px-4 border-l-2 border-gray-300 font-bold`}
  }

  // Adjust List Element Style
  ol,
  ul {
    ${tw`ml-5 py-6`}
  }

  // Adjust Horizontal Rule style
  hr {
    ${tw`my-10 border border-gray-300 `}
  }

  // Adjust Link Element Style
  a {
    ${tw`text-blue-400 underline`}
  }

  // Adjust Code Style
  pre[class*='language-'] {
    ${tw`my-5 p-4`}

    ::-webkit-scrollbar-thumb {
      ${tw`rounded-lg`}
      background: rgba(255, 255, 255, 0.5);
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
`;