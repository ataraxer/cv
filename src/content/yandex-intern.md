I joined Yandex as an intern at Statistics department, working on ad hoc analytics MapReduce scripts written in Perl and Python, which tought me:

- [MapReduce](https://en.wikipedia.org/wiki/MapReduce) model and essentials of data processing and analytics;
- basic design of MapReduce systems and APIs;
- pragmatic programming approach with a tight feedback loop of writing and testing code, due to high costs of running scripts on a cluster;
- effecient application of Linux command line tools (grep, sed, awk and other usual suspects) for basic local data processing;
- love for terminals, [vim](http://vim.wikia.com/wiki/Vim_Tips_Wiki) and [tmux](https://github.com/tmux/tmux/wiki).

After that I had briefly worked on Chart Editor -- a chart rendering web app for internal statistical reports publication platform.
Chart Editor allowed users to combine, process and visualize data from different stat reports. I was responsible for developing a JavaScript library for loading and processing report data and then converting it to representation accepted by [HighCharts](https://www.highcharts.com) rendering engine, which gave me experince with developing user-facing API's and essentials of user-friendly DSLs design. The library itself was written in [CoffeeScript](http://coffeescript.org) but exposed JavaScript API to the user and consisted of two primary parts:

- DSLs for describing input data requirements and chart settings based on [builder pattern](https://en.wikipedia.org/wiki/Builder_pattern);
- data processing core written in [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) paradigm which provided a set of useful combinators for transforming loaded data.
