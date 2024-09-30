---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team


{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!.*\b(pi|alumni)\b).*$" %}

{% include section.html %}

## Alumni

{% include list.html  data="members"  component="portrait"  filters="role: alumni" %}



{% include section.html %}

# Some Pictures

{% capture content %}

{%
  include figure.html
  image="images/team/ugly_sweaters.jpeg"
  caption="2nd place in a two-team ugly sweater contest. Nailed it!"
  link="team"
  width="100%"
%}

{%
  include figure.html
  image="images/team/halloween.jpg"
  caption="Halloween 2023."
  link="team"
  width="100%"
%}

{%
  include figure.html
  image="images/team/team.jpg"
  caption="A rare sighting: A proper picture in its natural habitat."
  link="team"
  width="100%"
%}



{%
  include figure.html
  image="images/team/t-shirts.jpg"
  caption="Geek Squad: Decoding the brain one rat at a time, powered by peak nerd attire."
  link="team"
  width="100%"
%}


{% endcapture %}

{% include grid.html content=content %}