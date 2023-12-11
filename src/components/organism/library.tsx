import React from 'react'
import { IoLibrary } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import PlaylistList from '../molecule/playlistList';

const LibraryCol = () => {
    return (
        <div className='bg-custom-black text-white rounded-sm'>
            <div className='library-head flex'>
                <div className='flex items-center'>
                    <IoLibrary />
                    <p>Your Library</p>
                </div>
                <div className='flex items-center'>
                    <div>
                        <FaPlus />
                    </div>
                    <div>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div>
                <PlaylistList />
            </div>
        </div>
    )
}

export default LibraryCol;