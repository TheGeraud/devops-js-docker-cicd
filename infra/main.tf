cd infra
terraform init
terraform apply -var="image_name=thegerauddocker/devops-js-docker-cicd:latest"
