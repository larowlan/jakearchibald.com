import { h, FunctionalComponent } from 'preact';
import App from './App';
import fontURL from 'asset-url:./logo-font.woff2';

const Page: FunctionalComponent<{}> = () => (
  <div>
    <link href={fontURL} rel="preload" crossOrigin="" as="font" />
    <header class="site-header">
      <div class="content-margin">
        <div class="header-layout">
          <Logo />
          <div class="title">
            <h1>
              <a href="./">The CORS playground</a>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <div class="app-container">
      <App />
    </div>
    <footer class="site-footer">
      <div class="content-margin">
        <nav>
          <ul class="nav-list">
            <li>
              <a href="../">Back to the article</a>
            </li>
            <li>
              <a href="https://github.com/jakearchibald/jakearchibald.com/tree/main/shared/demos/2021/cors/cors-playground">
                App source
              </a>
            </li>
            <li>
              <a href="https://github.com/jakearchibald/cors-playground/blob/main/index.ts">
                Server source
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
);

export const Logo: FunctionalComponent = () => (
  <svg viewBox="0 0 248.4 306.5">
    <g fill="#8A8A8A">
      <path d="m27.3 198.1-.7 1.8-1.5-.7v-8.6l2.2-1.1zm19.8-9.9-.7 1.8-1.5-.7v-8.6l2.2-1.1 1.5.7z" />
      <path d="M44.9 180.7v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 198.8-2.2 1.1v-8.6l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 181.4v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#8A8A8A">
      <path d="m27.3 189.8-.7 1.8-1.5-.7v-8.6l2.2-1.1zm19.8-9.9-.7 1.8-1.5-.7v-8.6l2.2-1.1 1.5.7z" />
      <path d="M44.9 172.4v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 190.5-2.2 1.1V183l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 173.1v2.2l-17.6 8.8v-2.2z" />
    </g>
    <path
      fill="#8A8A8A"
      d="m27.3 181.4-.7 1.9-1.5-.8v-8.6l2.2-1.1zm19.8-9.9-.7 1.9-1.5-.8V164l2.2-1.1 1.5.8zm-2.2-7.5v2.2L27.3 175v-2.2z"
    />
    <g fill="#ADADAD">
      <path d="m28.8 182.2-2.2 1.1v-8.6l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 164.8v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#8A8A8A">
      <path d="m27.3 173.1-.7 1.9-1.5-.8v-8.6l2.2-1.1zm19.8-9.9-.7 1.9-1.5-.8v-8.6l2.2-1.1 1.5.8z" />
      <path d="M44.9 155.7v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 173.9-2.2 1.1v-8.6l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 156.5v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#8A8A8A">
      <path d="m27.3 164.8-.7 1.8-1.5-.7v-8.6l2.2-1.1zm19.8-9.9-.7 1.8-1.5-.7v-8.6l2.2-1.1 1.5.7z" />
      <path d="M44.9 147.4v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 165.5-2.2 1.1V158l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 148.1v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#8A8A8A">
      <path d="m27.3 156.5-.7 1.8-1.5-.7V149l2.2-1.1zm19.8-9.9-.7 1.8-1.5-.7v-8.6l2.2-1.1 1.5.7z" />
      <path d="M44.9 139.1v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 157.2-2.2 1.1v-8.6l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 139.8v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#8A8A8A">
      <path d="m27.3 148.1-.7 1.9-1.5-.8v-8.6l2.2-1.1zm19.8-9.9-.7 1.9-1.5-.8v-8.6l2.2-1.1 1.5.8z" />
      <path d="M44.9 130.7v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 148.9-2.2 1.1v-8.6l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 131.5v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#8A8A8A">
      <path d="m27.3 139.8-.7 1.9-1.5-.8v-8.6l2.2-1.1zm19.8-9.9-.7 1.9-1.5-.8v-8.6l2.2-1.1 1.5.8z" />
      <path d="M44.9 122.4v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 140.6-2.2 1.1v-8.6l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 123.2v2.2l-17.6 8.8V132z" />
    </g>
    <g fill="#8A8A8A">
      <path d="m27.3 131.5-.7 1.9-1.5-.8V124l2.2-1.1zm19.8-9.9-.7 1.9-1.5-.8v-8.6l2.2-1.1 1.5.8z" />
      <path d="M44.9 114.1v2.2l-17.6 8.8v-2.2z" />
    </g>
    <g fill="#ADADAD">
      <path d="m28.8 132.3-2.2 1.1v-8.6l2.2-1.1zm19.8-9.9-2.2 1.1v-8.6l2.2-1.1z" />
      <path d="M46.4 114.9v2.2l-17.6 8.8v-2.2z" />
    </g>
    <path fill="#3B7982" d="m120.4 132-48.6-24.4v-2.5l48.6 24.4z" />
    <path fill="#65BEC9" d="m71.8 105.1 48.6 24.4 2.5-1.3-48.6-24.4z" />
    <path fill="#65BEC9" d="M122.9 128.2v2.6l-2.5 1.2v-2.5z" />
    <path fill="#3B7982" d="m120.4 129.4-2.1-1V103l2.1 1.1z" />
    <path fill="#65BEC9" d="m122.5 128.4-2.1 1v-25.3l2.1-1.1z" />
    <path fill="#3B7982" d="m73.9 106.2-2.1-1.1V79.7l2.1 1.1z" />
    <path fill="#65BEC9" d="m76 105.1-2.1 1.1V80.8l2.1-1.1z" />
    <path fill="#3B7982" d="m84.9 111.2-2.1-1V84.8l2.1 1z" />
    <path fill="#65BEC9" d="m87 110.2-2.1 1V85.8l2.1-1z" />
    <path fill="#3B7982" d="M96.1 117.1 94 116V90.6l2.1 1.1z" />
    <path fill="#65BEC9" d="m98.2 116-2.1 1.1V91.7l2.1-1.1z" />
    <path fill="#3B7982" d="m107.8 122.9-2.1-1V96.5l2.1 1z" />
    <path fill="#65BEC9" d="m109.9 121.9-2.1 1V97.5l2.1-1z" />
    <path fill="#3B7982" d="M120.4 104.1 71.8 79.7v-2.5l48.6 24.3z" />
    <path fill="#65BEC9" d="m71.8 77.2 48.6 24.3 2.5-1.2-48.6-24.4z" />
    <path fill="#65BEC9" d="M122.9 100.3v2.5l-2.5 1.3v-2.6z" />
    <path
      d="m127.7 210.2-6.9 3.5 80.5 39.4-42 30.8-84.1-47.4-8.8 4.4-61.3-30.7 61.3-30.6z"
      opacity=".1"
    />
    <path fill="#C93333" d="m128.5 138.4-61.3 30.7-61.3-30.7 61.3-30.7z" />
    <path fill="#F77" d="m128.5 132.2-61.3 30.6-61.3-30.6 61.3-30.7z" />
    <path fill="#3B7982" d="m10.5 212.6-4.6-2.3V50l4.6 2.3z" />
    <path fill="#C7F0DE" d="m15 50-4.5 2.3L5.9 50l4.6-2.3z" />
    <path fill="#65BEC9" d="m15 210.3-4.5 2.3V52.3L15 50z" />
    <path fill="#3B7982" d="m60.8 163.8-48.6-24.4v-2.5l48.6 24.3z" />
    <path fill="#65BEC9" d="m12.2 136.9 48.6 24.3 2.5-1.2-48.5-24.4z" />
    <path fill="#65BEC9" d="M63.3 160v2.5l-2.5 1.3v-2.6z" />
    <path fill="#3B7982" d="m60.8 161.2-2.1-1v-25.4l2.1 1z" />
    <path fill="#65BEC9" d="m62.9 160.2-2.1 1v-25.4l2.1-1z" />
    <path fill="#3B7982" d="m14.3 137.9-2.1-1v-25.4l2.1 1z" />
    <path fill="#65BEC9" d="m16.5 136.9-2.2 1v-25.4l2.2-1z" />
    <path fill="#3B7982" d="m25.3 143-2.1-1.1v-25.4l2.1 1.1z" />
    <path fill="#65BEC9" d="m27.4 141.9-2.1 1.1v-25.4l2.1-1.1z" />
    <path fill="#3B7982" d="m36.5 148.8-2.1-1v-25.4l2.1 1z" />
    <path fill="#65BEC9" d="m38.6 147.8-2.1 1v-25.4l2.1-1z" />
    <path fill="#3B7982" d="m48.2 154.7-2.1-1.1v-25.4l2.1 1.1z" />
    <path fill="#65BEC9" d="m50.3 153.6-2.1 1.1v-25.4l2.1-1.1z" />
    <path fill="#3B7982" d="m60.8 135.8-48.6-24.3v-2.6l48.6 24.4z" />
    <path fill="#65BEC9" d="m12.2 108.9 48.6 24.4 2.5-1.3-48.5-24.3z" />
    <path fill="#65BEC9" d="M63.3 132v2.6l-2.5 1.2v-2.5z" />
    <path fill="#3B7982" d="m67.2 241-4.6-2.2V78.4l4.6 2.3z" />
    <path fill="#C7F0DE" d="m71.8 78.4-4.6 2.3-4.6-2.3 4.6-2.2z" />
    <path fill="#65BEC9" d="m71.8 238.8-4.6 2.2V80.7l4.6-2.3z" />
    <path fill="#3B7982" d="m123.9 212.6-4.5-2.3V50l4.5 2.3z" />
    <path fill="#C7F0DE" d="m128.5 50-4.6 2.3-4.5-2.3 4.5-2.3z" />
    <path fill="#65BEC9" d="m128.5 210.3-4.6 2.3V52.3l4.6-2.3z" />
    <path
      fill="#F77"
      d="m160.1 284.2 42-30.8s-29.6-19.4-35.4-36.8c-5.8-17.5-11.3-61-49.6-79.1L73 159.3s13.5 7.7 22.8 20.3c6.8 9.2 9.4 22.9 12.8 29.5 8.1 15.5 16.9 40.7 21.1 44.3 4.3 3.6 30.4 30.8 30.4 30.8"
    />
    <path
      fill="#F77"
      d="m160.1 284 42-30.8s-29.6-19.4-35.4-36.8c-5.8-17.5-11.3-61-49.6-79.1L73 159.2s12.8 6.8 22.1 19.5c6.8 9.2 10.1 23.8 13.4 30.3 8.1 15.5 16.9 40.7 21.1 44.3 4.4 3.6 30.5 30.7 30.5 30.7"
    />
    <path
      fill="#FF9F9E"
      d="M162.3 283c-13.7-6.8-27.4-23.3-35.2-34.9-6.7-9.9-10.1-19.8-13.2-28.5-1.3-3.8-2.6-7.4-4-10.4-2.8-6.3-8.2-26.5-19.3-36.3-8.7-7.7-16.6-13.3-16.7-13.4l-.7-4.5 2.1-1.1c.3.2 8.4 6 17.6 14.1 12.7 11.2 19 32.7 22.6 40.7 1.5 3.5 2.9 7.3 4.3 11.3 5.9 16.8 12.6 35.8 39.2 49l3.3 14"
    />
    <path
      fill="#F74A4A"
      d="M160.1 284c-13.7-6.8-27.4-23.3-35.2-34.9-6.7-9.9-10.1-19.8-13.2-28.5-1.3-3.8-2.6-7.4-4-10.4-2.8-6.3-8.2-26.5-19.3-36.3-8.7-7.7-16.6-13.3-16.7-13.4l1.4-5.5c.3.2 8.4 6 17.6 14.1 12.7 11.2 19 32.7 22.6 40.7 1.5 3.5 2.9 7.3 4.3 11.3 5.9 16.8 12.6 35.8 39.2 49l3.3 13.9"
    />
    <path
      fill="#FF9F9E"
      d="M202.1 253.3a79.9 79.9 0 0 1-31.9-27.3c-6.7-9.9-10.1-19.8-13.2-28.5-1.3-3.8-2.6-7.4-4-10.4-2.8-6.3-8.2-26.5-19.3-36.3-8.7-7.7-16.6-13.3-16.7-13.4l-.7-4.4 2.1-1.1c.3.2 8.4 6 17.6 14.1 12.7 11.2 19 32.7 22.6 40.7 1.5 3.5 2.9 7.3 4.3 11.3 5.9 16.8 12.6 35.8 39.2 49v6.3z"
    />
    <path
      fill="#F74A4A"
      d="M200 254.4a79.9 79.9 0 0 1-31.9-27.3c-6.7-9.9-10.1-19.8-13.2-28.5-1.3-3.8-2.6-7.4-4-10.4-2.8-6.3-8.2-26.5-19.3-36.3-8.7-7.7-16.6-13.3-16.7-13.4l1.4-5.5c.3.2 8.4 6 17.6 14.1 12.7 11.2 19 32.7 22.6 40.7 1.5 3.5 2.9 7.3 4.3 11.3 5.9 16.8 12.6 35.8 39.2 49v6.3z"
    />
    <path
      fill="#E54645"
      d="M202.1 246.9 200 248v6.4l2.1-1.1zm-42 37.1-3.3-13.9 2.2-1 3.3 13.9m0 0 37.7-28.6v-2.2l-37.7 28.1"
    />
    <path
      fill="#3B7982"
      d="M134.4 52.3 67.2 85.9 0 52.3v-6.9l67.2-26.8 67.2 26.8z"
    />
    <path fill="#60C7D6" d="M134.4 45.4 67.2 79 0 45.4l67.2-33.6z" />
    <path fill="#FF5959" d="M67.2 79V0L0 45.4z" />
    <path fill="#FF8684" d="M134.4 45.4 67.2 0v79z" />
    <path
      d="M86.2 146.7s24.6 12.7 32.6 34c19-1.8 18.7-8.6 18.7-8.6s-21.4-31.4-28.8-33.9c-7.3-2.5-23.1 4-22.5 8.5z"
      opacity=".1"
    />
    <path
      fill="#FFDF9E"
      d="m115.1 147.3 3.6.4s.3 13.3 3.9 20.1c4.9 1.9 10 1.7 9.5.9-.5-.7-5.4-3.2-5.4-3.2s-.4-19.6-2-23.1-17.2-4.8-17.2-4.8l7.6 9.7z"
    />
    <path
      fill="#F66"
      d="M122.2 166.9s-1.1 2.2.3 2.9c.3.1 8.2 2.2 11.7 2.1 2.6-.1-.8-3.2-2.2-3.9l-5.2-2.5s1.8.7.7 1.3c-1.1.6-5.3.1-5.3.1z"
    />
    <path
      fill="#FFEDC9"
      d="m109.5 151.6 3.6.4s.3 13.3 3.9 20.1c4.9 1.9 10 1.7 9.5.9-.5-.7-5.4-3.2-5.4-3.2s-.4-19.6-2-23.1-17.2-4.8-17.2-4.8l7.6 9.7z"
    />
    <path
      fill="#F66"
      d="M116.6 171.2s-1.1 2.2.3 2.9c.3.1 8.2 2.2 11.7 2.1 2.6-.1-.4-3.6-1.8-4.3-1.2-.6-5.6-2.1-5.6-2.1s2.3 1 1.2 1.7c-1.1.6-5.8-.3-5.8-.3z"
    />
    <path
      fill="#FFDF9E"
      d="M103 116c1.9 0 7.4 20.2 7.5 22.1 0 1.9-1.9.5-1.9.5S92.1 115.9 103 116z"
    />
    <path
      fill="#DB5837"
      d="m104.7 132.7 18.4 7.8s-3.2-1.3-4 4.3l-.1.6-20-7.1-.3-6.8 6 1.2z"
    />
    <path
      fill="#FB0"
      d="M100.3 113.4c-1.4.3-2.8 2.9.3 8 3.1-3 4.8-2.2 4.8-2.2s-2-6.5-5.1-5.8z"
    />
    <path
      fill="#FF6640"
      d="m102.2 136.4 16.1 8.7s-2.9-.4-4.2.8-3 3-1.8 6.8c-18.7-2.5-18.9-9.9-18.9-9.9l-.1-5.4 8.9-1z"
    />
    <path
      fill="#FFCC40"
      d="m98.7 140-5.4.6v-.8c-.1-1.5-.8-2.5-7.3-20.6 1.6-2.1 7.7-4.6 11.7-6 2.3-.8 4.8.5 5.4 2.8 1.3 4.6 3 13.8 4.2 17.2a12.3 12.3 0 0 1-8.6 6.8z"
    />
    <path
      fill="#FFDF9E"
      d="M89.5 112.5s1.5 2.7 1.3 3.5c5.6 4 8.3 1.5 8.1.6-.2-.9-2.5-3.2-2.5-3.2l-.1-4.2-6.8 3.3z"
    />
    <path
      fill="#FFEDC9"
      d="M99.5 104.5c1.2.8-.7 10.1-1.4 10.7-.7.6-6.7.2-8.8-2.5-2-2.7-5.2-18 10.2-8.2z"
    />
    <path
      fill="#91573B"
      d="M103.2 100.9s-2.5 3.1-3.7 3.6c-1.2.5-5.8.8-6.6.7s-.9 2.5-.9 2.5-1.9-1.1-2.3.1c-.4 1.2 1.7 2.6 1.7 2.6l-1.2 3.5s-4-4.4-4-7.4 1.2-5.9 3.3-6.7c7.1-2.7 8.5.9 10.3 1.1h3.4z"
    />
    <path
      fill="#FFE3E3"
      d="M122.4 172.8c.2 0 .4-.2.5-.3.7-.5 1-1 1-1.4 0-.4-.2-.6-.2-.6l-.2-.2-.2.3c-1.6 1.9-1.4 2-1.2 2.2h.3zm1.2.5c.2 0 .4-.2.5-.3.7-.5 1-1 1-1.4 0-.4-.2-.6-.2-.6l-.2-.2-.2.3c-1.6 1.9-1.4 2-1.2 2.2h.3zm1.2.5c.2 0 .4-.2.5-.3.7-.5 1-1 1-1.4 0-.4-.2-.6-.2-.6l-.2-.2-.2.3c-1.6 1.9-1.4 2-1.2 2.2h.3zm2.6-5.3c.2 0 .4-.2.5-.3.7-.5 1-1 1-1.4 0-.4-.2-.6-.2-.6l-.2-.2-.2.3c-1.6 1.9-1.4 2-1.2 2.2h.3zm1.2.5c.2 0 .4-.2.5-.3.7-.5 1-1 1-1.4 0-.4-.2-.6-.2-.6l-.2-.2-.2.3c-1.6 1.9-1.4 2-1.2 2.2h.3zm1.2.5c.2 0 .4-.2.5-.3.7-.5 1-1 1-1.4 0-.4-.2-.6-.2-.6l-.2-.2-.2.3c-1.6 1.9-1.4 2-1.2 2.2h.3z"
    />
    <path
      fill="#FFEDC9"
      d="M87 119.3s-1.2-.4-1.9.8a35.8 35.8 0 0 0 5.6 14.8 83 83 0 0 0 12.8 3.3c1.7-.1 5.2-.7 5.1-1.9-.1-1.2-.6-3.7-1.6-3.3-1 .4-3.3 1.3-4.2 1.3-.8 0-9.7-2.5-10.3-3-.6-.4-2.9-11.6-5.5-12z"
    />
    <path
      fill="#FFDD7D"
      d="M86.7 118.8c-1.5.1-3.3 2.4-1.1 8.1 3.6-2.5 5.2-1.4 5.2-1.4s-.8-6.8-4.1-6.7z"
    />
    <path
      fill="#AEB5F3"
      d="M246.7 280v5.1c0-5.3-3.5-10.6-10.5-14.6-13.9-8-36.4-8-50.2 0-6.9 4-10.3 9.2-10.3 14.4v-5.1c0-5.2 3.4-10.4 10.3-14.4 13.8-8 36.3-8 50.2 0 7.1 4 10.5 9.3 10.5 14.6z"
    />
    <path
      fill="#AEB5F3"
      d="M248.4 280v5.1c0 5.5-3.6 10.9-10.8 15.1a57.8 57.8 0 0 1-52.5 0c-7.3-4.2-11-9.8-11-15.3v-5.1c0 5.5 3.6 11.1 11 15.3 14.5 8.4 38 8.4 52.5 0 7.2-4.1 10.8-9.6 10.8-15.1z"
    />
    <path
      fill="#898DBF"
      d="M237.4 264.7c14.5 8.4 14.6 22 .2 30.4a57.8 57.8 0 0 1-52.5 0c-14.5-8.4-14.6-22-.2-30.4 14.5-8.4 38-8.4 52.5 0zm-51.1 29.8c13.9 8 36.4 8 50.2 0 13.8-8 13.7-21-.2-29.1-13.9-8-36.4-8-50.2 0-13.8 8-13.7 21 .2 29.1z"
    />
    <path fill="#D7DDFD" d="m231.1 296.1 4.8-2.7-46.7-27-4.8 2.7z" />
    <path fill="#AEB5F3" d="M231.1 296.1v1.3l-46.7-27v-1.3z" />
    <path fill="#898DBF" d="M231.1 297.4v-1.3l4.8-2.7v1.2z" />
    <path fill="#D7DDFD" d="m223.1 289.4 3-1.7-28.9-16.7-3 1.7z" />
    <path fill="#AEB5F3" d="M223.1 289.4v.8l-28.9-16.7v-.8z" />
    <path fill="#898DBF" d="M223.1 290.2v-.8l3-1.7v.8z" />
    <path
      fill="#D7DDFD"
      d="m189.4 283.8.2.7c.2.5.7.9 1.3 1.3l8 4.6c1.8 1 4.6 1.2 6.1.3l24.8-14.3c.4-.2.7-.5.9-.8l.2-.7c0-.7-.5-1.4-1.5-2l-8-4.6c-1.8-1-4.6-1.2-6.1-.3l-24.8 14.3c-.8.4-1.1.9-1.1 1.5z"
    />
    <path
      fill="#AEB5F3"
      d="M189.4 283.8v1.4c0 .7.5 1.4 1.5 2l8 4.6c1.8 1 4.6 1.2 6.1.3l24.8-14.3c.7-.4 1.1-1 1.1-1.5v-1.4l-.2.7c-.2.3-.5.6-.9.8L205 290.7c-1.6.9-4.3.8-6.1-.3l-8-4.6c-.7-.4-1.1-.8-1.3-1.3l-.2-.7z"
    />
    <path
      fill="#D7DDFD"
      d="M211.8 257.5h-1.6c-6.3.1-9.8.9-13.3 1.7h-.1l-1.4.4h-.1c-4.3 1.3-5.4 1.9-8.7 3.6l-1.2.7h-.1l-1.1.7c-1.6 1.1-1.7 1.2-3.7 3l-2 2.3-1 1.5-1.3 2.9c-.3 1-.4 1.2-.5 2.6v.2l-.1.5c.1-4.4.4-7.6.5-9.2l.6 1.6 1.1-5.9 1.6 2.3c1-3.5 1.7-5.6 2.4-7.6l3.4 3.3c2-4.2 4-7.8 4.8-9.1l5.9 5.4c3.3-4.8 6.1-8.4 7.3-9.9 4 4 6.6 6.8 8.6 9zm34.9 19.8v-.2l-.4-2.2-1.2-3-.8-1.4-1.9-2.4c-1.1-1.1-1.1-1.2-3.3-2.9l-2.4-1.6c-3.4-1.9-4.8-2.4-8.4-3.7h-.1l-1.4-.4-.2-.1a61.4 61.4 0 0 0-13.1-2l-1.6-.1c2.8-3.1 5.3-5.6 8.4-8.8 3.7 4.8 6.1 8.5 7.2 10.1l5.9-5.3c2.2 3.9 3.4 6.5 4.6 9.1l3.3-3.2 2.3 7.5 1.5-2.2 1 5.8.6-1.5v8.5z"
    />
    <path fill="#D7DDFD" d="m196.8 259.3-.7 1-.7-.7 1.4-.3z" />
    <path
      fill="#AEB5F3"
      d="M211.8 259.4c-7.4 0-11.2.9-14.9 1.7l-1.6.4c-4.3 1.3-5.4 1.9-8.7 3.6l-2.4 1.4c-1.6 1.1-1.7 1.2-3.7 3l-2 2.3-1 1.5-1.3 2.9c-.4 1.2-.4 1.3-.6 3.3l.1-2.3v-.2c.1-3.1.3-5.4.5-6.6l.6 1.6a72 72 0 0 1 1.1-5.9l1.6 2.3c1-3.5 1.7-5.6 2.4-7.6l3.4 3.3v-.1c2-4.2 4-7.7 4.7-9a106.7 106.7 0 0 1 5.9 5.5l.7-1c3-4.3 5.5-7.5 6.6-8.9l6.8 7.1c.7.5 1.3 1.1 1.8 1.7z"
    />
    <path
      fill="#D7DDFD"
      d="m213.4 257.6-1.6 1.8-1.6-1.8h1.6c.5-.1 1.1 0 1.6 0zm14.7 2.4-.7.6-.7-1 1.4.4z"
    />
    <path
      fill="#AEB5F3"
      d="M246.7 280c0-1.1 0-1.2-.4-3.2l-1.2-3-.8-1.4-1.9-2.4c-1.1-1.1-1.1-1.2-3.3-2.9l-2.4-1.6c-3.4-1.9-4.8-2.4-8.4-3.7l-1.7-.5c-6.7-1.8-10.8-1.9-14.8-2l1.6-1.8 6.8-7c3.1 4 5.2 7.1 6.5 9l.7 1 .7-.6 5.2-4.6c2.2 3.9 3.4 6.5 4.6 9.1l3.3-3.2 2.3 7.5 1.5-2.2 1 5.8.6-1.5.4 6.3c-.3 1.2-.3 2.2-.3 2.9z"
    />
    <g fill="#D7DDFD">
      <path d="M211.3 298.9h-1.4c-3.6-.1-7.4-.4-13.5-1.9l-.3-.1-1-.3-.3-.1a39.1 39.1 0 0 1-10.9-5.2c-2.2-1.7-2.4-1.8-3.6-3.1l-1.9-2.3-.9-1.5-1.2-2.9-.4-2.3v-1.1c0-1.1.1-2.1.4-3.6l.5 5.2 1-2.4 1.5 7.1 2.4-3.4c.5 1.5 1.5 4.7 3.3 9l4.7-5c1.4 2.7 3.1 6 5.9 10.6l7.3-8c1.8 2.6 4.4 6.3 8.4 11.3z" />
      <path d="M246.7 278.5v.9c0 .5-.1 1-.5 2.4-.3.9-.8 2.1-1.3 3l-.9 1.4-2 2.4a24.8 24.8 0 0 1-3.4 2.9l-2.4 1.6a40.9 40.9 0 0 1-8.4 3.6l-.4.1-1 .3-.4.1c-6 1.5-9.9 1.7-13.4 1.8h-1.5c4-4.9 6.6-8.6 8.5-11.2l7.2 8c2.8-4.5 4.5-7.9 5.9-10.5l4.6 4.9c1.8-4.2 2.8-7.3 3.3-8.9l2.3 3.4a87 87 0 0 0 1.5-6.9l1 2.4.6-5.1c.6 1.3.7 2.3.7 3.4z" />
    </g>
    <path fill="#D7DDFD" d="m196.1 296.8-.5.5-.5-.8 1 .3z" />
    <path
      fill="#AEB5F3"
      d="M211.3 300.6c-4-.1-8.1-.2-14.9-1.9l-1.6-.5a39.1 39.1 0 0 1-10.9-5.2c-2.2-1.7-2.4-1.8-3.6-3l-1.9-2.3-.9-1.5-1.2-2.9c-.4-2-.4-2.1-.4-3.3v-.8c0-.9.1-1.7.4-2.9l.5 5.2 1-2.4 1.5 7.1 2.4-3.4c.5 1.5 1.5 4.7 3.3 9l4.7-5c1.3 2.5 2.9 5.6 5.4 9.7l.5.8.5-.5 6.8-7.5a167.2 167.2 0 0 0 8.4 11.3z"
    />
    <path
      fill="#D7DDFD"
      d="m212.7 298.8-1.5 1.8-1.4-1.8h2.9zm14.8-2.2-.5.8-.5-.5 1-.3z"
    />
    <path
      fill="#AEB5F3"
      d="M246.7 280.3c0 1.1 0 1.2-.5 3.3-.3.9-.8 2.1-1.3 3l-.9 1.4-2 2.4a24.8 24.8 0 0 1-5.8 4.4 40.9 40.9 0 0 1-8.4 3.6l-1.7.5c-6.8 1.7-10.9 1.8-14.9 1.9l1.5-1.8c3.2-4 5.4-7.1 7-9.4l6.7 7.5.5.5.5-.8c2.5-4.1 4.2-7.2 5.4-9.7l4.6 4.9c1.8-4.2 2.8-7.3 3.3-8.9l2.3 3.4a87 87 0 0 0 1.5-6.9l1 2.4.6-5.1c.2 1.1.4 1.9.4 2.7.2.1.2.4.2.7z"
    />
  </svg>
);

export default Page;
