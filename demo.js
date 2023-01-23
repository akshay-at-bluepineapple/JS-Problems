"use strict";
// const arr = [1,2,3,4,5,6,7,8,9];

// let result = function (x) {
//     return x+2;
// }

// const num = arr.map(result)

// console.log(num);

//factorial using recursion

// const fact = (n) =>{
//     if(n <= 1) return 1;
//     else return n*fact(n-1);
// }

// console.log(fact(3));

// var num = 1;

// function demo(){
//     var numl= 2;
//     console.log(num);
// }

// demo();

// function sayHi(){
//     return "hello";
// }

// function sayBye(){
//     return "bye bye";
// }

// function greet(greetMessege/*functions*/,/*string*/msg){
//     console.log(greetMessege(),msg);
// }

// greet(sayHi,"akshay");
// greet(sayBye,"akshay");

// const names = ["akshay", "aman","ankush"];

// names.map(names=>{
//     greet(sayBye,names);
// // });

// function returnfunc(x){

//     return function(){
//         return "hello"+x;
//     }

// }

// const demo = returnfunc("akshay");
// console.log(demo); //this will print the demo inner function function of return functions
// console.log(demo()); // this line will call the function and return the result

// (async ()=>{

//     let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits");
//     let result = await response.json();
//     console.log("this first result");
//     console.log(result[0].commit.author.name);

// }
// )()

// let url = new URL("https://api.github.com/repos/javascript-tutorial/");
// console.log(url); //
// console.log(JSON.stringify(url));//returns a JSON representation of the URL

// console.log('---------------------');

// url.searchParams.set("key","akshay");
// console.log(url);

// console.log('-----------------------');

// let url1 = encodeURI("https://api.github.com/repos/javascript-tutorial/привет");

// console.log(url1);

// let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

// console.log(socket);

// let str = "welcome to pune and join the world of javascript.Welcome"
// let num = "+9 this -7030 -6392-23";
// let regex = /\S/g;
// let result = num.match(regex).join('');

// console.log(result);
// let replace = "hello"

// let res= str.match(/tom/gi);

// let replaced = str.replace(/welcome/,"$$ whatsoever");

// console.log(res);
// console.log("replaced : "+ replaced);

// let test = /welcome/;
// let res = test.test(str);

// let str = "welcome to pune and join the world of javascript.Welcome 12:45";
// let str2 = "<input type='text'  name='welcome' value='12' />";
// let res3 = str2.match(/<(([a-z]+)\s*([^>]*))>/);
// let res = str.match(/\b\d\d:\d\d\b/);
// let res1 = str.match(/[^aeioy]/gi);
// // console.log(res1.join(''));
// console.log(res3);

// ------------------------------------------------------------------------------------------------------
// let arr = ["application", "application2","ball", "category","troy"];
// let arr1 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// console.log(arr.join(''));

// arr.pop();  // remove the last element
// console.log(arr);

// arr.push(
//     {"hello": "world"}
// ); // add the element to the array at the end
// console.log(arr);

// arr.shift(); // remove the first element
// console.log(arr);

// arr.unshift(7030);
// console.log(arr);

// delete arr[2]; // remove the element at specified but the element will be left to undefined
// console.log(arr[2])
// console.log(arr);

//  let res = arr.concat(arr1,"3","4","5","6","7","8","9",["null"]); // this will concat the two array
// console.log(res);

// let res1 = res.splice(1,5); //splice is used to delete the elemen at the specified index[start index,how many elements to delete,(optional element to insert)] returns the deleted elementsś
// console.log(res1);
// console.log(res);

// let res2 = res.splice(1,3,5,8);//will del 3 elememnt starting  from index 1 and add the element which is in option
// console.log(res);

// let res3 = res.slice(3); // will slice 2 elememnt starting from index 1 and the last element is ignored
// console.log(res3);

// let res4 = res.toString();
// console.log(res4);

//------------- array using array constructor--------------------------------
// let newArr = new Array(1,3,4,5,21,204,106);
// console.log(newArr);

// -------------Array Sort-----------------------
// let res5 = newArr.sort();
// let ans = newArr.map((l)=>{
//     console.log(l);
// });s
// console.log(ans);
// console.log("the result of sort is: " + res5);

// let res6 = newArr.reverse();
// console.log(res6);

// let ans = newArr.map((l)=>{
//     return (l.toString().charCodeAt(0));
// })

// console.log(ans);

// console.log("---------------Sorting----------");
// console.log(newArr.sort((a,b)=>{
//     return b-a;
// }));
// console.log(ans.sort((a,b)=>{return b-a;}));

//console.log("1".charCodeAt(0));

//---------Array Reduce --------------------

// let arr = [1,3,2,2,2,24,5];

// let ans = arr.reduce((prev,curr)=>{
//     console.log(`the current value is: ${curr} and the previous value is: ${prev}`);
//     return prev + curr
// },2)

// console.log(ans);

const blogs = [
  {
    slug: "our-team-offsite-and-vision",
    title: "Our Team offsite and Vision",
    content:
      "\n<p><strong>From the CEO’s desk:</strong></p>\n\n\n\n<p>What a fantastic month so far! We began October with our leadership and team offsite held in the picturesque mountains of the Sahyadris near Pune.&nbsp;It was really great to get to the outdoors for some fun and learning! It is a beautiful time of the year at the mountains. The place was teeming with greenery and fabulous views. I would love to share some of these moments with you in this post.</p>\n\n\n\n<p>Two fun filled days, a lot of excitement and our&nbsp;<strong>BETTER*</strong>&nbsp;values on display – I loved the change in the environment which helped us free our minds from the daily work activities and think outside the box.</p>\n\n\n\n<p>The team building activities included quite a few challenges that got all of us exercising both mind and body.</p>\n\n\n\n<p>Even some rain could not dampen the enthusiasm. The activities were followed by a fantastic evening of talent showcase by all folks! What an amazing team bonding experience!</p>\n\n\n\n<p>Each of us had a lot of opportunity to reflect during the activities and crystallise our thoughts and learning. I am confident the learning this weekend will be put to good use at our work and personal fronts.</p>\n\n\n\n<p>Everyone was excited about our #WomenInTech initiative and some wonderful stories shared that certainly inspired all of us in the audience!</p>\n\n\n\n<p>Great discussions and thoughts around how we can apply our team strengths to power forward over the next year!</p>\n\n\n\n<h3><strong>We are emboldened by our vision –</strong>&nbsp;<strong>Enable every enterprise user worldwide have the right cloud experience.</strong></h3>\n\n\n\n<p><em>Thank you once again to our fantastic team! Onward and upward! We look ahead to a bright future at Bluepineapple!</em></p>\n\n\n\n<p>Join&nbsp;<strong>#teamblue</strong>&nbsp;with BETTER values and help us achieve our vision!</p>\n\n\n\n<p><em>* BETTER values– Belief, Ethics, Trust, Transparency, Excellence and Respect</em></p>\n",
    date: "2022-11-02T16:15:58",
    categories: {
      nodes: [
        {
          name: "Team",
        },
        {
          name: "Values",
        },
        {
          name: "Vision",
        },
      ],
    },
    blog_by: {
      blogBy: "By Team Bluepineapple",
      blogOverview:
        "From the CEO’s desk: What a fantastic month so far! We began October with our leadership and team offsite held in the picturesque mountains of the Sahyadris near Pune.",
    },
    featuredImage: {
      node: {
        sourceUrl:
          "https://bluepwwwsa.blob.core.windows.net/bluep-www-media-container/2022/11/636b4595384b5-636b4595384b6blog-14.png.png",
      },
    },
  },
  {
    slug: "solution-spectrum-scoping-the-problem-domain-using-architectural-context",
    title:
      "Solution Spectrum – Scoping the problem domain using Architectural Context",
    content:
      '\n<h4>What is the solution spectrum&nbsp;</h4>\n\n\n\n<p>The success of any project is strongly predicated upon correct identification of the problem domain. This ‘setting the architectural context’ is critically important in rapid determination of project goals and solution scope.</p>\n\n\n\n<p>All organisations (or departments) that use salesforce as an enterprise tool can be plotted onto a spectrum vis-a-vis their maturity on the platform. Their position on the maturity line can easily be translated into an architectural context in order to arrive at valuable inputs for arriving at appropriate solutions.</p>\n\n\n\n<p>Similarly, organisational goals with respect to platform investments can be plotted on the spectrum in a range spanning tactical or quick wins through to strategic enterprise needs.</p>\n\n\n\n<figure class="wp-block-image"><a href="https://i0.wp.com/bluepineapple.io/wp-content/uploads/2020/03/Frame-Solution-Spectrum-Scope-3-1.png?fit=768%2C614&amp;ssl=1"><img decoding="async" src="https://bluepineapple.io/2018/03/20/solution-spectrum-scoping-the-problem-domain-using-architectural-context/image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="Frame-Solution-Spectrum-Scope" title="Frame-Solution-Spectrum-Scope (3)"/></a></figure>\n\n\n\n<h4>Using the spectrum to model scope</h4>\n\n\n\n<p>Together, the different organisation goals can be used to derive a solution spectrum on which customer requirements can be plotted and prioritised to derive the scope of the solution exercise.</p>\n\n\n\n<p>Once the customer organisation or department’s maturity on the platform is understood, every macro customer ask can be fit into the tactical to strategic range. The position of the requirement is then an input into a potential solution – e.g a pilot process rollout for a department or a re-engineering of business process for incorporating newer business needs.</p>\n\n\n\n<p>This spectrum helps in many ways: in clarifying solution scope, in determining the priority of customer asks based on their strategic or tactical value as well as in enabling solution architects visualise the context in which the solution needs to be designed.</p>\n\n\n\n<p>At bluepineapple, we use this spectrum as an extraordinarily effective tool to start the larger architectural exercise required for enterprise platform deployments. Using this with other tools and templates for solution model selection, our salesforce architects accelerate understanding of the customers’ problems and requirements better, improve and speed up the entire solution lifecycle.</p>\n',
    date: "2022-11-02T16:14:13",
    categories: {
      nodes: [
        {
          name: "Architecture",
        },
        {
          name: "FIT Methodology",
        },
        {
          name: "Team",
        },
        {
          name: "Technology",
        },
      ],
    },
    blog_by: {
      blogBy: "By Team Bluepineapple",
      blogOverview:
        "By combining beautiful designs & layouts with powerful options, Oshine lets you build any kind of website starting from simple portfolio websites to full blown ecommerce",
    },
    featuredImage: {
      node: {
        sourceUrl:
          "https://bluepwwwsa.blob.core.windows.net/bluep-www-media-container/2022/11/636b458c1b5dc-636b458c1b5ddblog13.png.png",
      },
    },
  },
  {
    slug: "the-future-of-digital-is-multi-cloud",
    title: "The future of digital is multi-cloud",
    content:
      '\n<p>Year 2019- 2020 has witnessed a wholehearted move by companies of all sizes towards a multi-cloud platform environment strategy.</p>\n\n\n\n<p>This development can be viewed from the following three perspectives:</p>\n\n\n\n<p>1. Enterprise risk and governance – Over dependence on a single cloud platform vendor, vulnerability of applications hosted on the same platform.</p>\n\n\n\n<p>2. Opportunity to leverage best of breed solutions – Leveraging the best platform for the job, focusing on business rather than the tech as many platforms provide low code or no code options.</p>\n\n\n\n<p>3. Ensuring appropriate skill development in teams – Carrying out skill assessment and doing a gap analysis in teams vis-a-vis the multi-cloud strategy, cross training teams to ensure required skills to manage and innovate on cloud platforms, encouraging cross-industry participation on different cloud platforms.</p>\n\n\n\n<p>Solution providers need to enable their teams to navigate across different cloud platforms from a solutioning mindset. This can only be achieved by focusing on continuous learning, re-skilling and soft skill development of the teams.</p>\n\n\n\n<p>The future is here. Welcome to multi-cloud.</p>\n\n\n\n<p><a href="https://www.linkedin.com/feed/hashtag/?keywords=teamblue&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6676726235562946560">#teamblue</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=devcon&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6676726235562946560">#devcon</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=innovation&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6676726235562946560">#innovation</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=multicloud&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6676726235562946560">#multicloud</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=bluepineapple&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6676726235562946560">#bluepineapple</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=cloud&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6676726235562946560">#cloud</a><a href="https://www.linkedin.com/feed/hashtag/?keywords=cloudstrategy&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6676726235562946560">#cloudstrategy</a></p>\n',
    date: "2022-11-02T16:12:15",
    categories: {
      nodes: [
        {
          name: "Cloud Services",
        },
        {
          name: "Digital Transformation",
        },
        {
          name: "Technology",
        },
      ],
    },
    blog_by: {
      blogBy: "By Team Bluepineapple",
      blogOverview:
        "Year 2019- 2020 has witnessed a wholehearted move by companies of all sizes towards a multi-cloud platform environment strategy.",
    },
    featuredImage: {
      node: {
        sourceUrl:
          "https://bluepwwwsa.blob.core.windows.net/bluep-www-media-container/2022/11/636b4582ba111-636b4582ba112blog12.png.png",
      },
    },
  },
];

let output = blogs.filter(eachVal => {
    let opt = eachVal.categories.nodes.some((
        { name }) => name === 'Technology');
    return opt;
})

console.log(output);