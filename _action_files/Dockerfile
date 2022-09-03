FROM fastai/jekyll:2020-12-30

WORKDIR /fastpages
COPY . .
RUN chmod u+x action_entrypoint.sh
RUN chmod u+x word2post.sh
RUN dos2unix /fastpages/*.sh

ENV PORT=8080

EXPOSE 8080 

CMD [ "/fastpages/action_entrypoint.sh" ]
