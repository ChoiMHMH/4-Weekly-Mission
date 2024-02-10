function AppFooter() {
  /*수정: a태그 link였나 검색해서 바꾸기*/
  return (
    <footer>
      <div class="footer-box">
        <span class="copyright">©codeit - 2023</span>
        <div class="footer-links">
          <a class="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a class="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div class="sns">
          <img src="./images/facebook.svg" alt="facebook" />

          <img src="./images/twitter.svg" alt="twitter" />

          <img src="./images/youtube.svg" alt="youtube" />

          <img src="./images/instagram.svg" alt="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
