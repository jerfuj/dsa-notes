import PostDetails from '../../components/posts/PostDetails';
import { getPostData, getPostFiles } from '../../lib/postHelpers';

const FullPostPage = ({ postData }) => {
  return (
    <PostDetails postData={postData} />
  )
};

export const getStaticProps = (context) => {
  const { slug } = context.params;

  const postData = getPostData('data-structures', slug);

  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = () => {
  const files = getPostFiles('data-structures');

  const slugs = files.map(file => (
    file.replace(/\.md$/, '')
  ));

  const paths = slugs.map(slug => (
    { params: { slug }}
  ));

  return {
    paths,
    fallback: false
  }
}

export default FullPostPage;