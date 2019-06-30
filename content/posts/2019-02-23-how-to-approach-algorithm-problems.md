---
title: "How to approach algorithm problems"
date: "2019-02-23T12:00:00.000Z"
template: "post"
draft: true
slug: "/blog/how-to-approach-algorithm-problems/"
img: "/media/xkcd-290.png"
category: "Programming"
tags:
  - "Careers"
  - "Machine Learning"
  - "Programming"
  - "Tutorials"
description: "An example that's probably closer to what you're experiencing in coding interviews"
prev: "/blog/journey-to-ml-part-2-skills-of-a-marketable-machine-learning-engineer/"
next: "/blog/journey-to-machine-learning-part-1-introductions-motivations-and-roadmap/"
---

A lot of articles often give advice on how to approach coding interview questions. However, what I find lacking in these is the actual examples that they give. Most often these examples are very generic (e.g, may just require memorizing how to do BFS, for example), or are almost insultingly simple (i.e., you probably don't need the special workflow if you're just doing fizzbuzz, but in real life you're going to encounter problems much tougher than that). Algorithm challenges can take many different unexpected turns. It used to be the case that just reading "Cracking the coding interview" was enough to pass an interview. Then interviewers caught on to the patterns and problems from that book. Then sites like Leetcode started coming up. Studying to sites like those worked for a bit, but then interviewers caught on again. Part of the reason for this is that some interviews try to make the process intentionally stressful. 

With that in mind, I decided to try and replicate the experience in blog-post form.

Here's our problem (from this [paypal challenge](https://www.hackerrank.com/contests/hack-it-to-win-it-paypal/challenges/q4-traveling-is-fun))

>There are n cities numbered from 1 to n. Two cities, x and y, are connected by a bidirectional road if and only if gcd(x,y) > g, where gcd is the greatest common divisor of x and y. Julia is planning a long vacation and wants to know whether a path exists from city x to city y.

Complete the connectedCities function; it has four parameters:

Name	Type	Description
n	integer	The number of cities.
g	integer	Cities  and  are connected if and only if .
originCities	integer array	Each index  (where ) describes  for the  pair of cities.
destinationCities	integer array	Each index  (where ) describes  for the  pair of cities.
The function must return an array of  integers where the value at each index  (where ) is  if a path exists from city  to city ; otherwise, it's  instead.

Input Format

The code to read the inputs from stdin and to pass it to the function  is provided for you. The below is documentation in case you need to create custom testcases.

The first line contains an integer denoting .
The second line contains an integer denoting .
The third line contains an integer, , denoting the total number of elements in .
Each line  of  subsequent lines (where ) contains an integer describing .
The next line contains an integer, , denoting the total number of elements in .
Each line  of  subsequent lines (where ) contains an integer describing .
Constraints

 where 
 where 
Output Format

Return an array of  integers where the value at each index  (where ) is  if a path exists from city  to city ; otherwise, it's  instead.

Whew. That's quite a doozy of a problem, but we can still solve it. 

The first thing to do is the clarify exactly what is expected in terms of outputs with respect to example inputs. Make

Let's visualize this:

Here is the code in C++

```cplusplus
#include <bits/stdc++.h>
using namespace std;
#define int long
 
vector <int> vec, siz;
 
int root(int a)
{
    while(a!=vec[a]) a=vec[a];
    return a;
}
 
void union_find(int a, int b)
{
    int roota = root(a);
    int rootb = root(b);
    if(roota==rootb) return;
    if(siz[roota]<siz[rootb])
    
        vec[roota]=vec[rootb];
        siz[rootb]+=siz[roota];
 
    
    else
    
        vec[rootb]=vec[roota];
        siz[roota]+=siz[rootb];
    
 
}
 
vector <int> connectedCities(int n, int g, vector <int> originCities, vector <int> destinationCities) {
 
    vec.clear();
    int N=n;
    for(int i=0;i<=N; i++) vec.push_back(i);
    siz.assign(N+1, 1);
 
    for(int i=g+1; i<=N; i++)
        for(int j=2*i; j<=N; j+=i)
        
            union_find(j, i);
        
    vector <int> ret_vec;
 
    for(int i=0; i<originCities.size(); i++)
    
        if(root(originCities[i]) == root(destinationCities[i]) ) ret_vec.push_back(1);
        else ret_vec.push_back(0);
    
    return ret_vec;
 
}
 
signed main() {
    int n;
    cin >> n;
    int g;
    cin >> g;
    int originCities_cnt;
    cin >> originCities_cnt;
    vector<int> originCities(originCities_cnt);
    for(int originCities_i = 0; originCities_i < originCities_cnt; originCities_i++){
        cin >> originCities[originCities_i];
    
    int destinationCities_cnt;
    cin >> destinationCities_cnt;
    vector<int> destinationCities(destinationCities_cnt);
    for(int destinationCities_i = 0; destinationCities_i < destinationCities_cnt; destinationCities_i++){
        cin >> destinationCities[destinationCities_i];
    
    vector <int> res = connectedCities(n, g, originCities, destinationCities);
    for (ssize_t i = 0; i < res.size(); i++) {
        cout << res[i] << (i != res.size() - 1 ? "\n" : "");
    
    cout << endl;
 
 
    return 0;
}
```

output

stdin
```
10
1
4
10
4
3
6
4
3
6
2
9
```

stdout
```
1
1
1
1
```

And there we have it
