import {Post} from './post';

describe('Post', () => {

  it('should accept values in the constructor', () => {
    let post = new Post({
      id: 1,
      title: 'hello',
      link: 'link',
      complete: true,
      caption: 'caption',
      likes: '2'
    });
    expect(post.id).toEqual(1);
    expect(post.title).toEqual('hello');
    expect(post.link).toEqual('link');
    expect(post.complete).toEqual(true);
    expect(post.caption).toEqual('caption');
    expect(post.likes).toEqual(2);
  });

});
