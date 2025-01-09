"use client";
import React, { useEffect, useState } from "react";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";
import getQueueSongs from "@/actions/getQueueSongs";
import usePlayer from "@/hooks/usePlayer";

const QueueContent = () => {
  const player = usePlayer();
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    const getSongs = async () => {
      const fetchSong = await getQueueSongs(player.ids);
      setSongs(fetchSong);
    };
    getSongs();
  }, [player]);
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">No songs found.</div>;
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((item) => (
        <div key={item.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={item} />
          </div>
          <LikeButton songId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default QueueContent;