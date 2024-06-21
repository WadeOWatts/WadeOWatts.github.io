---
title: "影廳"
layout: category
permalink: /cinema/
taxonomy: cinema
pagination:
  enabled: true
  collection: cinema
---
<div class="posts">
  {% for post in paginator.posts %}
    <article class="post">
      <header>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      </header>
      <div class="entry">
        {{ post.excerpt }}
      </div>
    </article>
  {% endfor %}
</div>

{% if paginator.total_pages > 1 %}
  <nav class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="prev">Previous</a>
    {% endif %}
    {% for page in (1..paginator.total_pages) %}
      {% if page == paginator.page %}
        <em>{{ page }}</em>
      {% else %}
        <a href="{{ paginator.paginate_path | replace: ':num', page }}">{{ page }}</a>
      {% endif %}
    {% endfor %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="next">Next</a>
    {% endif %}
  </nav>
{% endif %}
