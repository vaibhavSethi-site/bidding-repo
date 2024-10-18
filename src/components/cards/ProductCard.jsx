import PropTypes from "prop-types";
import { RiAuctionFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { Caption, PrimaryButton, ProfileCard, Title } from "../common/Design";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ item }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="h-56 relative">
          <NavLink to={`/details/${item?._id}`}>
            <img src={item?.image} alt={item?.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out" />
          </NavLink>
          <ProfileCard className="absolute right-3 bottom-3 shadow-md">
            <RiAuctionFill size={22} className="text-green" />
          </ProfileCard>

          <div className="absolute top-0 left-0 p-2 w-full">
            <div className="flex items-center justify-between">
              {item?.isSoldout ? (
                <Caption className="text-red-500 bg-white px-3 py-1 text-sm rounded-full">Sold Out</Caption>
              ) : (
                <Caption className="text-green bg-green_100 px-3 py-1 text-sm rounded-full">On Stock</Caption>
              )}
              <Caption className="text-green bg-green_100 px-3 py-1 text-sm rounded-full">{item?.totalBids} Bids</Caption>
            </div>
          </div>
        </div>
        <div className="details p-4">
          <Title className="uppercase font-semibold text-lg">{item.title}</Title>
          <hr className="my-2" />
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <RiAuctionFill size={40} className="text-green" />
              <div>
                <Caption className="text-green">Current Bid</Caption>
                <Title className="text-lg font-bold">${item?.biddingPrice}.00</Title>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-gray-300"> </div>
            <div className="flex items-center gap-3">
              <GiTakeMyMoney size={40} className="text-red-500" />
              <div>
                <Caption className="text-red-500">Buy Now</Caption>
                <Title className="text-lg font-bold">${item?.price}.00</Title>
              </div>
            </div>
          </div>
          <hr className="my-2" />

          <div className="flex items-center justify-between mt-3">
            <PrimaryButton className="bg-green text-white rounded-lg px-6 py-2 hover:bg-green-700 transition duration-200">Place Bid</PrimaryButton>
            <PrimaryButton className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700 transition duration-200">
              <MdOutlineFavorite size={20} />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  item: PropTypes.any,
};
