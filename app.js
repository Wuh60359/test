const fetchCommit = async () => {
    const commitUrl = "https://api.github.com/repos/heartexlabs/label-studio-frontend/git/ref/heads/master";
    const TOKEN = "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"
  
    console.info(`Fetching ${commitUrl}`);
    const res = await fetch(commitUrl, {
        headers: { Authorization: `token ${TOKEN}` },
      });
    const json = await res.json();
    console.log('Response:', json);
  };

  fetchCommit();
  