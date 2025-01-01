import {Component, OnInit} from '@angular/core';
import {BlogPost} from "../types";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";

type ApiResponse = {
  data: {
    publication: {
      posts: {
        edges: [
          {
            node: BlogPost
          }
        ]
      }
    }
  }
}


const postsQuery = `
query {
  publication(host: "mikesheehy.hashnode.dev") {
    title
    posts(first: 10) {
      edges {
        node {
          slug
          title
          brief
          url
          coverImage {
            url
            photographer
          }
        }
      }
    }
  }
}
`;

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    const request = this.httpClient.post<ApiResponse>(
      'https://gql.hashnode.com',
      {
        query: postsQuery
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      },
    );

    request.subscribe((response) => {
      this.blogPosts = response.data.publication.posts.edges.map(edge => edge.node);
    });
  }
}