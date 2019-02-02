export const searchResource = {
  stackOverflowUrl: qs =>
    `https://api.stackexchange.com/2.2/search?order=desc&sort=votes&tagged=${qs}&site=stackoverflow`,
  fetchStackOverflow: function(qs) {
    return fetch(this.stackOverflowUrl(qs)).then(res => res.json());
  }
};
