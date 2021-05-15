import dynamic from 'next/dynamic';

const PostEditor = dynamic(
    () => import('@components/Editor2/Editor'),
    { ssr: false }
)

function writePost():JSX.Element {
    return (
        <>
            <PostEditor />
        </>
    )
}

export default writePost;