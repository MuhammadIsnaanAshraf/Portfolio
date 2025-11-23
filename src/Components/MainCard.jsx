// import React from 'react';
// import styled from 'styled-components';
// import assests from '../assets/assests';

// const Card = () => {
//     return (
//         <StyledWrapper>
//             <div className="card max-h-[70vh] max-w-[40vw] object-cover">
//                 <img src={assests.main_img} alt="Isnaan's Image" className='max-h-full max-w-full z-10 rounded-lg' />
//             </div>
//         </StyledWrapper>
//     );
// }

// const StyledWrapper = styled.div`
//   .card {
//     // width: 400px;
//     // height: 402px;
//     // width: 30vw;
//     // height: 58vh;
//     background: #07182E;
//     position: relative;
//     display: flex;
//     place-content: center;
//     place-items: center;
//     overflow: hidden;
//     border-radius: 8px;
//     padding: 10px 4px;
//   }

//   .card::before {
//     content: '';
//     position: absolute;
//     // width: 50px;
//      width: 40%; 
//     height: 150%;
//     background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
//     // height: 100%;
//     animation: rotBGimg 3s linear infinite;
//     transition: all 0.2s linear;
//     box-sizing : border-box;
//   }

//   @keyframes rotBGimg {
//     from {
//       transform: rotate(0deg);
//     }

//     to {
//       transform: rotate(360deg);
//     }
//   }

// //   .card::after {
// //     content: '';
// //     position: absolute;
// //     background: #07182E;
// //     ;
// //     inset: 5px;
// //     border-radius: 15px;
// //   }  
//   /* .card:hover:before {
//     background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
//     animation: rotBGimg 3.5s linear infinite;
//   } */`;

// export default Card;




import React from 'react';
import styled from 'styled-components';
import assets from '../assets/assets';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <img src={assets.main_img} alt="Isnaan's Image" className='image' />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 400px;
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 4px;
    padding: 5px;
  }

  .image {
    width: 98%;
    height: 98%;
    object-fit: cover;
    border-radius: 4px;
    position: relative;
    z-index: 10;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 110px;
    height: 600px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 250px;
      height: 300px;
    }
  }
`;

export default Card;