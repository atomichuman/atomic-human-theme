# Makefile for managing the Atomic Human Theme

# Variables
NODE_BIN=node_modules/.bin
CSS_SRC=assets/css/tailwind.css
CSS_OUT=assets/css/styles.css

# Default task
.PHONY: all
all: build

# Install dependencies
.PHONY: install
install:
	@echo "Installing dependencies..."
	npm install

# Build the Tailwind CSS
.PHONY: build
build: install
	@echo "Building Tailwind CSS..."
	$(NODE_BIN)/postcss $(CSS_SRC) -o $(CSS_OUT)

# Watch for changes (useful during development)
.PHONY: watch
watch: install
	@echo "Watching for changes..."
	$(NODE_BIN)/postcss $(CSS_SRC) -o $(CSS_OUT) --watch

# Clean generated CSS
.PHONY: clean
clean:
	@echo "Cleaning up generated CSS..."
	rm -f $(CSS_OUT)

# Full rebuild: clean and then build
.PHONY: rebuild
rebuild: clean build
	@echo "Rebuild complete."
