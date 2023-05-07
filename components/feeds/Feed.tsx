import FeedItem from "./FeedItem";
import aw from "@/images/img4.jpg";
import mv from "@/images/img5.jpg";
import sm from "@/images/img3.jpg";
import ru from "@/images/img6.jpeg";

interface feedProps {
  feedtitle: string;
}

const Feed: React.FC<feedProps> = ({ feedtitle }) => {
  return (
    <div className="mx-8">
      <h2 className="text-white tracking-wide text-3xl my-4">{feedtitle}</h2>
      <div className="flex items-center justify-start gap-8">
        <FeedItem title="Walkerverse" discription="Feel it" image={aw} />
        <FeedItem title="smile" discription="Just smile" image={sm} />
        <FeedItem title="Multiverse" discription="Multi fun" image={mv} />
        <FeedItem title="Rise up" discription="Rise with us" image={ru} />
      </div>
    </div>
  );
};

export default Feed;
