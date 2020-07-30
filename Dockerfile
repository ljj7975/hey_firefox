FROM nvidia/cuda:10.2-base

# set up environment
RUN apt-get update --fix-missing && \ 
	apt-get install -q -y --no-install-recommends \
	curl \
	build-essential	\
	sudo \
	vim \
	make \
	git \
	make

# Install nodejs
RUN apt-get -y install curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

# prepare data folder
RUN mkdir /data

# prepare environment
WORKDIR /app
COPY package.json /app
RUN npm install --unsafe-perm=true --allow-root

ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app/src/
