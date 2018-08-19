all:
	@rm -f complete-result.txt
	@rm -f results.txt
	@rm -f benchmarks.txt
	
	@./run server/express.js
	@./run server/koa.js
	@./run server/plumier.js
	@echo | tee -a benchmarks.txt
	@echo 'Simple HTTP benchmark results with close connection' | tee -a benchmarks.txt
	@sort -nr results.txt | tee -a benchmarks.txt
	@rm results.txt

.PHONY: all