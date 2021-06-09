import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDownload, faEye } from '@fortawesome/free-solid-svg-icons';

const ImageCard = ({ image }) => {
  const {webformatURL, user, views, downloads, likes, tags} = image;
  const allTags = tags.split(',');

  return (
    <div className="max-w-sm my-4 rounded overflow-hidden shadow-lg">
      <img src={webformatURL} alt="" className="object-cover h-48 w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {user}
        </div>
        <ul>
          <li className="flex justify-between">
            <div>
              <strong>Views: </strong>
              {views}
            </div>

            <FontAwesomeIcon icon={faEye} />
          </li>
          <li className="flex justify-between">
            <div>
              <strong>Downloads: </strong>
              {downloads}
            </div>

            <FontAwesomeIcon icon={faDownload} />
          </li>
          <li className="flex justify-between">
            <div>
              <strong>Likes: </strong>
              {likes}
            </div>

            <FontAwesomeIcon icon={faThumbsUp} />
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {allTags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;
