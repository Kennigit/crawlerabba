
class SocialPost {
    /*
    Each SocialPost has a set of generic post properties
    */
    postType = '';
    postID = '';
    postName = '';
    postUploadDate = '';
    postDescription = '';
    postUser = '';

    constructor( postType, postID, postName, postUploadDate, postDescription, postUser ) {
        this.postType = postType;
        this.postID = postID;
        this.postName = name;
        this.postUploadDate = postUploadDate;
        this.postDescription = postDescription;
        this.postUser = postUser;
    }
}

class Crawl {
    // take a searchQuery, searchType,
    // Holds an array of SocialPosts
    // Methods: construct,  createPost
    // Methods, clean up dates, and data integrity, sort
    searchQuery = '';
    searchType = '';
    crawlPosts: SocialPost[];


    // construct
    constructor(searchQuery: string, searchType: string) {
        this.searchQuery = searchQuery;
        this.searchType = searchType;

        // test googlenews
        if (searchType === 'news') {
            this.searchNews(searchQuery, searchType);
        }
    }
    // creates a new SocialPost object with input, returns  single post
    searchNews(searchQuery: string, searchType: string) {
        // testnews
        console.log('Google News: it worked');
    }

}

function setup() {
    const testCrawl = new Crawl('', 'twitter');
    const testPost = new SocialPost('', '', '', '', '', '');
    testCrawl.searchQuery = '';
}





