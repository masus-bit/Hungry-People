import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Header = styled.header`
  margin-top: 20px;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Logo = styled.div`
  margin-left: 40px;
`;
const LeftMenu = styled.div`
  menuitemst-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
const RightMenu = styled.div`
  menuitemst-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
const MenuItem = styled.li`
  margin-left: 40px;
  margin-right: 40px;
  list-style:none;
`;
const MenuLink = styled(Link)`
  font-family: "Open Sans", sans-serif;
  color: #ffd600;
  text-decoration: none;
  :hover {
    
    color: gray;
    transition: 0.5s;
    cursor: pointer;
  }
`;
export const PageHeader=()=>{
    return(
    <Header>
    <div>
      <LeftMenu>
        <MenuItem>
          <MenuLink to="/">HOME</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>ABOUT</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>TEAM</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>BOOKING</MenuLink>
        </MenuItem>
      </LeftMenu>
    </div>
    <Logo>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M146.341 69.0789C144.934 69.0789 139.587 71.0526 136.773 72.1805C136.492 71.0526 135.366 70.2068 133.959 70.2068C132.552 70.2068 131.144 71.0526 131.144 72.1805L125.797 71.3346C124.953 59.7744 120.45 49.6241 113.415 41.4474L116.51 36.9361C117.355 37.5 119.043 37.5 119.887 36.3722C121.013 35.2444 121.295 33.8346 120.45 32.9887C123.265 31.8609 128.612 29.6053 129.456 28.4774C130.582 27.0677 129.737 24.2481 127.767 21.9925C125.516 20.0188 122.702 19.1729 121.295 20.3008C120.169 21.1466 117.917 26.5038 116.792 29.3233C115.947 28.7594 114.259 29.0414 113.415 29.8872C112.289 31.015 112.008 32.4248 112.852 33.2707L108.349 36.3722C100.188 29.3233 89.7749 24.812 78.5178 23.9662L77.6736 18.609C78.7993 18.3271 79.6435 17.1992 79.6435 15.7895C79.6435 14.3797 78.7993 13.2519 77.6736 12.9699C78.7993 10.1504 80.7692 4.79323 80.7692 3.38346C80.4878 1.40977 77.955 0 74.8593 0C71.7636 0 69.2308 1.40977 68.9493 3.38346C68.9493 4.79323 70.9193 10.1504 72.045 12.9699C70.9193 13.2519 70.0751 14.3797 70.0751 15.7895C70.0751 17.1992 70.9193 18.609 72.045 18.609L71.2008 23.9662C59.6623 24.812 49.531 29.3233 41.3696 36.3722L36.8668 33.2707C37.4296 32.4248 37.4296 30.7331 36.3039 29.8872C35.1782 28.7594 33.7711 28.4774 32.9268 29.3233C31.8011 26.5038 29.5497 21.4286 28.424 20.3008C27.0169 19.1729 24.2026 20.0188 22.2326 22.2744C19.9812 24.2481 19.137 27.0677 20.2627 28.7594C21.1069 29.8872 26.454 32.1429 29.2683 33.2707C28.7054 34.1165 28.9869 35.8083 29.8311 36.6541C30.9569 37.782 32.364 38.0639 33.2083 37.2181L36.3039 41.7293C29.2683 49.906 24.7655 60.3383 23.9212 71.6165L18.5741 72.4624C18.2927 71.3346 17.167 70.4887 15.7599 70.4887C14.3527 70.4887 13.227 71.3346 12.9456 72.4624C10.1313 71.3346 4.78424 69.3609 3.37711 69.3609C1.40713 69.6429 0 72.1805 0 75.282C0 78.3835 1.40713 80.9211 3.37711 81.203C4.78424 81.203 10.1313 79.2293 12.9456 78.1015C13.227 79.2293 14.3527 80.0752 15.7599 80.0752C17.167 80.0752 18.5741 79.2293 18.5741 78.1015L23.9212 78.9474C24.7655 90.5075 29.2683 100.658 36.3039 108.835L33.4897 113.064C32.6454 112.5 30.9569 112.5 30.1126 113.628C28.9869 114.756 28.7054 116.165 29.5497 117.011C26.7355 118.139 21.6698 120.395 20.5441 121.523C19.4184 122.932 20.2627 125.752 22.2326 128.008C24.4841 130.263 27.2983 131.109 28.7054 129.699C29.8311 128.853 32.0826 123.496 33.2083 120.677C34.0525 121.241 35.7411 120.959 36.5854 120.113C37.7111 118.985 37.9925 117.575 37.1482 116.729L41.651 113.628C49.8124 120.677 60.2251 125.188 71.4822 126.034L72.3265 131.391C71.2008 131.673 70.3565 132.801 70.3565 134.211C70.3565 135.62 71.2008 136.748 72.3265 137.03C71.2008 139.85 69.2308 145.207 69.2308 146.617C69.5122 148.59 72.045 150 75.1407 150C78.2364 150 80.7692 148.59 81.0507 146.617C81.0507 145.207 79.0807 139.85 77.955 137.03C79.0807 136.748 79.925 135.62 79.925 134.211C79.925 132.801 79.0807 131.391 77.955 131.391L78.7993 126.034C90.3377 125.188 100.469 120.677 108.63 113.628L113.133 116.729C112.57 117.575 112.57 119.267 113.696 120.113C114.822 121.241 116.229 121.523 117.073 120.677C118.199 123.496 120.45 128.853 121.576 129.699C122.983 130.827 125.797 129.981 128.049 128.008C130.3 125.752 131.144 122.932 129.737 121.523C128.893 120.395 123.546 118.139 120.732 117.011C121.295 116.165 121.013 114.474 120.169 113.628C119.043 112.5 117.636 112.218 116.792 113.064L113.696 108.553C120.732 100.376 125.235 89.9436 126.079 78.6654L131.426 77.8196C131.707 78.9474 132.833 79.7932 134.24 79.7932C135.647 79.7932 136.773 78.9474 137.054 77.8196C139.869 78.9474 145.216 80.9211 146.623 80.9211C148.593 80.6391 150 78.1015 150 75C149.437 72.1805 148.03 69.3609 146.341 69.0789ZM30.9569 76.9737C29.8311 76.9737 28.9869 76.1278 28.9869 75C28.9869 73.8722 29.8311 73.0263 30.9569 73.0263C32.0826 73.0263 32.9268 73.8722 32.9268 75C32.9268 76.1278 32.0826 76.9737 30.9569 76.9737ZM104.409 42.5752C105.253 41.7293 106.379 41.7293 107.223 42.5752C108.068 43.4211 108.068 44.5489 107.223 45.3947C106.379 46.2406 105.253 46.2406 104.409 45.3947C103.846 44.5489 103.846 43.4211 104.409 42.5752ZM74.8593 29.3233C75.985 29.3233 76.8293 30.1692 76.8293 31.297C76.8293 32.4248 75.985 33.2707 74.8593 33.2707C73.7336 33.2707 72.8893 32.4248 72.8893 31.297C72.8893 30.1692 73.7336 29.3233 74.8593 29.3233ZM42.4953 42.5752C43.3396 41.7293 44.4653 41.7293 45.3096 42.5752C46.1539 43.4211 46.1539 44.5489 45.3096 45.3947C44.4653 46.2406 43.3396 46.2406 42.4953 45.3947C41.9325 44.5489 41.9325 43.4211 42.4953 42.5752ZM47.561 50.7519L49.8124 53.0075C50.3752 53.5714 50.9381 53.5714 51.5009 53.2895L54.5966 56.391C53.7523 58.3647 54.5966 61.4662 57.1295 64.0038C59.9437 66.8233 63.8837 67.6692 65.5722 65.9774C63.3208 68.2331 61.9137 71.3346 61.9137 74.718V73.8722H50.9381C50.6567 73.8722 50.3752 73.5902 50.3752 73.0263C50.3752 72.4624 50.6567 72.1805 50.9381 72.1805H62.4766V71.8985C62.4766 71.0526 61.6323 70.2068 60.788 70.2068H49.8124C49.2495 70.2068 47.8424 71.8985 46.9981 73.3083H43.621C43.3396 72.7444 42.7767 72.1805 42.2139 72.1805H38.5554C39.1182 64.2857 42.2139 56.6729 47.561 50.7519ZM45.3096 107.425C44.4653 108.271 43.3396 108.271 42.4953 107.425C41.651 106.579 41.651 105.451 42.4953 104.605C43.3396 103.759 44.4653 103.759 45.3096 104.605C46.1539 105.451 46.1539 106.579 45.3096 107.425ZM47.561 99.2481C42.2139 93.3271 38.8368 85.4323 38.2739 76.9737H41.9325C42.4953 76.9737 43.3396 76.4098 43.3396 75.8459H46.4353C47.2796 77.2556 48.6867 79.2293 49.2495 79.2293H60.2251C61.0694 79.2293 61.9137 78.6654 61.9137 77.8196V77.2556H50.9381C50.6567 77.2556 50.3752 76.9737 50.3752 76.4098C50.3752 75.8459 50.6567 75.5639 50.9381 75.5639H62.4766V74.718C62.4766 78.1015 63.8837 81.203 66.1351 83.4587C64.4465 81.7669 60.5066 82.6128 57.6923 85.4323C55.1595 87.9699 54.3152 91.0714 55.1595 93.0451L52.0638 96.1466C51.5009 95.8647 50.6567 95.8647 50.3752 96.4286L47.561 99.2481ZM74.8593 120.959C73.7336 120.959 72.8893 120.113 72.8893 118.985C72.8893 117.857 73.7336 117.011 74.8593 117.011C75.985 117.011 76.8293 117.857 76.8293 118.985C76.8293 120.113 75.985 120.959 74.8593 120.959ZM107.223 107.425C106.379 108.271 105.253 108.271 104.409 107.425C103.565 106.579 103.565 105.451 104.409 104.605C105.253 103.759 106.379 103.759 107.223 104.605C108.068 105.451 108.068 106.579 107.223 107.425ZM102.158 99.2481L99.9062 96.9925C99.3433 96.4286 98.7805 96.4286 98.2176 96.7105L95.122 93.609C95.9662 91.6353 95.1219 88.5338 92.5891 85.9962C89.7749 83.1767 85.8349 82.3308 84.1463 84.0226C82.4578 85.7143 83.3021 89.6617 86.1163 92.4812C88.6492 95.0188 91.7448 95.8647 93.7148 95.0188L96.8105 98.1203C96.5291 98.6842 96.5291 99.5301 97.0919 99.812L99.3433 102.068C93.4334 107.425 85.8349 110.808 77.3921 111.372V107.707C77.3921 107.143 76.8293 106.297 76.2664 106.297V102.914C77.3921 102.068 79.3621 100.658 79.3621 100.094V89.0978C79.3621 88.2519 78.5178 87.406 77.6736 87.406H77.3921V98.9662C77.3921 99.2481 77.1107 99.5301 76.5479 99.5301C75.985 99.5301 75.7036 99.2481 75.7036 98.9662V87.688H74.8593H74.015V98.9662C74.015 99.2481 73.7336 99.5301 73.1707 99.5301C72.6079 99.5301 72.3265 99.2481 72.3265 98.9662V87.688H71.7636C70.9193 87.688 70.3565 88.5338 70.3565 89.3797V100.376C70.3565 100.94 72.3265 102.35 73.7336 103.195V106.297C73.1707 106.579 72.6079 107.143 72.6079 107.707V111.372C64.1651 110.808 56.2852 107.425 50.3752 102.068L52.6266 99.812C53.1895 99.2481 53.1895 98.6842 52.9081 98.1203L56.0038 95.0188C57.9737 95.8647 61.0694 95.0188 63.6023 92.4812C66.4165 89.6617 67.2608 85.7143 65.5722 84.0226C67.8236 86.2782 70.9193 87.688 74.2964 87.688C81.3321 87.688 86.6792 82.0489 86.6792 75.282C86.6792 68.2331 81.0507 62.8759 74.2964 62.8759C70.9193 62.8759 67.8236 64.2857 65.5722 66.5414C67.2608 64.8496 66.4165 60.9023 63.6023 58.0827C61.0694 55.5451 57.9737 54.6993 56.0038 55.5451L52.9081 52.4436C53.1895 51.8797 53.1895 51.0338 52.6266 50.7519L50.3752 48.4962C56.2852 43.1391 64.1651 39.7556 72.6079 39.1917V42.8571C72.6079 43.4211 73.1707 44.2669 73.7336 44.2669V47.3684C72.3265 48.2143 70.3565 49.6241 70.3565 50.188V61.1842C70.3565 62.0301 70.9193 62.8759 71.7636 62.8759H72.3265V51.0338C72.3265 50.7519 72.6079 50.4699 73.1707 50.4699C73.7336 50.4699 74.015 50.7519 74.015 51.0338V62.594H74.8593H75.7036V51.0338C75.7036 50.7519 75.985 50.4699 76.5479 50.4699C77.1107 50.4699 77.3921 50.7519 77.3921 51.0338V62.594H77.6736C78.5178 62.594 79.3621 61.7481 79.3621 60.9023V49.906C79.3621 49.3421 77.6736 47.9323 76.2664 47.0865V43.703C76.8293 43.4211 77.3921 42.8571 77.3921 42.2932V38.6278C85.8349 39.1917 93.4334 42.5752 99.3433 47.6504L97.0919 49.906C96.5291 50.4699 96.5291 51.0338 96.8105 51.5978L93.7148 54.6992C91.7448 53.8534 88.6492 54.6993 86.1163 57.2369C83.3021 60.0564 82.4578 64.0038 84.1463 65.6955C85.8349 67.3872 89.7749 66.5414 92.5891 63.7218C95.1219 61.1842 95.9662 58.0827 95.122 56.109L98.2176 53.0075C98.7805 53.2895 99.6248 53.2895 99.9062 52.7256L102.158 50.4699C107.505 56.391 110.882 64.0038 111.445 72.4624H107.786C107.223 72.4624 106.379 73.0263 106.379 73.5902H103.002C102.158 72.4624 100.75 70.4887 100.188 70.4887H89.212C88.3677 70.4887 87.5235 71.3346 87.5235 72.1805V72.4624H98.7805C99.0619 72.4624 99.3433 72.7444 99.3433 73.3083C99.3433 73.8722 99.0619 74.1541 98.7805 74.1541H87.5235V75.5639H98.7805C99.0619 75.5639 99.3433 75.8459 99.3433 76.4098C99.3433 76.9737 99.0619 77.2556 98.7805 77.2556H87.5235V77.8196C87.5235 78.6654 88.3677 79.2293 89.212 79.2293H100.188C100.75 79.2293 102.158 77.2556 103.002 75.8459H106.098C106.379 76.4098 106.942 76.9737 107.505 76.9737H111.163C110.882 85.7143 107.505 93.3271 102.158 99.2481ZM66.9794 75C66.9794 70.7707 70.3565 67.1053 74.8593 67.1053C79.0807 67.1053 82.7392 70.4887 82.7392 75C82.7392 79.2293 79.3621 82.8947 74.8593 82.8947C70.6379 82.8947 66.9794 79.5113 66.9794 75ZM118.762 76.9737C117.636 76.9737 116.792 76.1278 116.792 75C116.792 73.8722 117.636 73.0263 118.762 73.0263C119.887 73.0263 120.732 73.8722 120.732 75C120.732 76.1278 119.887 76.9737 118.762 76.9737Z"
          fill="#FFD600"
        />
      </svg>
    </Logo>
    <div>
      <RightMenu>
        <MenuItem>
          <MenuLink to="/menu">MENU</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>GALLERY</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>EVENTS</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>CONTACT</MenuLink>
        </MenuItem>
      </RightMenu>
    </div>
  </Header>
    )
}