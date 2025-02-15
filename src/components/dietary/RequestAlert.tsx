import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
interface RequestAlertProps {
  muted: boolean;
  onToggleMute: () => void;
  newRequest: boolean;
}
export const RequestAlert: React.FC<RequestAlertProps> = ({
  muted,
  onToggleMute,
  newRequest
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (newRequest && !muted && audioRef.current) {
      audioRef.current.play();
    }
  }, [newRequest, muted]);
  return <>
      <audio ref={audioRef}>
        <source src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={onToggleMute} className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
        {muted ? <>
            <VolumeX className="h-4 w-4 mr-2 text-gray-500" />
            <span>Unmute Alerts</span>
          </> : <>
            <Volume2 className="h-4 w-4 mr-2 text-teal-500" />
            <span>Mute Alerts</span>
          </>}
      </button>
    </>;
};