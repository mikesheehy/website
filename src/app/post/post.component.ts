import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogPost} from "../types";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {DatePipe} from "@angular/common";

type BlogPostWithContentAndAuthor = BlogPost & {
  publishedAt: string
  author: {
    name: string,
    profilePicture: string
  }
  content: {
    html: string
  }
}

type ApiResponse = {
  data: {
    publication: {
      post: BlogPostWithContentAndAuthor
    }
  }
}

const singlePostQuery = `
query ($slug: String!) {
  publication(host: "compiler.blog") {
    post(slug: $slug) {
      title
      brief
      publishedAt
      author {
        name
        profilePicture
      }
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
}
`;

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  post: BlogPostWithContentAndAuthor = {} as BlogPostWithContentAndAuthor

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const slug = snapshot.params['slug'];

    const request = this.httpClient.post<ApiResponse>(
      'https://gql.hashnode.com',
      {
        query: singlePostQuery,
        variables: {
          slug: slug
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      },
    );

    request.subscribe((response) => {
      this.post = response.data.publication.post;
    });
  }
}
