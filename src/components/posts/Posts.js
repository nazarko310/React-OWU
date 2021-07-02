export const Posts = ({posts}) => {
    return (
        <div>
          {posts.map(value => <div>{value.title} ---- {value.body}</div>)}
        </div>
    );
}
