"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}


/** put stories on a page */

function navDisplayStories(evt) {
  console.debug("navDisplayStories", evt);
  hidePageComponents();
  putStoriesOnPage() ;
}
$body.on("click", "#nav-all", navAllStories);

/** Show submit link on "login" */

function navShowLinks(evt) {
  console.debug("navShowLinks", evt);
  hidePageComponents();
  $hiddenLinks.show();

}

/** Show add story form */

function navAddStory(evt) {
  console.debug("navAddStory", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitStory.show();
 
}
$submitLink.on("click", navAddStory);