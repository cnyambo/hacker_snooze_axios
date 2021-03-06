"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;
let myStoryList;
let rankIds=[];

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
   
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}



/** Add a new Story on the list. */

async function postStoriesOnPage(evt) {
  evt.preventDefault();
  console.debug("postStoriesOnPage");
  const author = $('#author-data').val();
  const title = $('#title-data').val();
  const url = $('#url-data').val();
  const data = {title, url, author };
  console.log(data);
 const newStory = await storyList.addStory(currentUser,  data);
  console.log(data,newStory);
  $submitStory.toggle();
  $submitStory.trigger("reset");
  
   /*
;*/
  //location.reload(); 
  //console.log(newStory);
  //return newStory;
}

$submitStory.on("submit", postStoriesOnPage);


/** Gets list of stories from server, generates their HTML, and puts on page. Add the star */

function putStoriesOnPageWithRankIcon() {
  console.debug("putStoriesOnPageWithRankIcon");
  
  $allStoriesList.empty();
  
  //console.log(storyList);
  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);

    //add star icone
    const $star = $(`<a href="#" id="${story.storyId}-a" ><i class="bi bi-star" ></i></a>`)//.append(``);
 
 
    rankIds.push(`${story.storyId}-a`)  ;

     
     //const $mark= document.getElementById($id);
     //console.log($id);
    //prepend the star icon in front of the story
    
    $story.prepend($star);

    //append the story on the body
    $allStoriesList.append($story);


    
    //call on click
   // $mark.on("click", navMarkClick);
  }

  $allStoriesList.show();
}


/** Get and show stories when site first loads. */

async function getAndShowMyStories() {
  
  myStoryList = currentUser.ownStories;
  //$storiesLoadingMsg.remove();
  //$stories.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of myStoryList) {
    const $story = generateStoryMarkup(story);
    $stories.append($story);
  }

  $stories.show(); 
  console.log($stories);
  //$storiesLoadingMsg.remove();
}
//console.log(rankIds);

/*function rankStory()
{
  for(let ids of rankIds)
  {
    const $rank =document.getElementById(`${ids}`);
    console.log($rank)
    /*$rank.on("click",  async function handleEpisodeClick(evt) {
      console.log(evt)
       
    }); 

  }

}*/


