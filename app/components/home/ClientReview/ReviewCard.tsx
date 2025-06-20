import React from 'react';
import Image from 'next/image';
import { FaStar, FaRegStar } from 'react-icons/fa';

type Props = {
  reviewTitle: string;
  userName: string;
  userImage: string;
  role: string;
  rating?: number; // Optional rating out of 5
};

const ReviewCard = ({
  reviewTitle,
  userImage,
  userName,
  role,
  rating = 5, // default to 5 stars
}: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-6 w-full max-w-md mx-auto hover:shadow-xl transition duration-300">
      {/* Review Text */}
      <p className="text-gray-700 dark:text-gray-300 italic text-xl font-bold leading-relaxed mb-4">
        “{reviewTitle}”
      </p>

      {/* Star Rating */}
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <FaStar key={index} className="text-yellow-400 mr-1" />
          ) : (
            <FaRegStar key={index} className="text-yellow-400 mr-1" />
          )
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify max-w-2xl mx-auto mb-10">
  We’re proud to serve thousands of happy customers who trust our service every day.
  Here’s what some of them have to say about their experience with us.
</p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Image */}
        <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm">
          <Image
            src={userImage}
            alt={userName}
            fill
            className="object-cover"
          />
        </div>

        {/* Name and Role */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold text-lg">
            {userName}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
