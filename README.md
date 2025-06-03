![image](https://github.com/user-attachments/assets/d081dce5-f409-4bed-959d-e5c62f99e7cc)


# 🌱 Blue-Green Deployment with GitHub Actions, Terraform, Ansible, Helm & ArgoCD

This project demonstrates a complete CI/CD pipeline with a **blue-green deployment strategy** using **GitHub Actions**, **Docker**, **Kubernetes**, **Helm**, **Ansible**, and **Terraform**. The infrastructure is provisioned using non-modular Terraform and deployed locally via **Minikube** with GitOps powered by **ArgoCD**.



## 🚀 Project Highlights

- 🔵🟢 **Blue-Green Deployment** on Kubernetes using Helm charts
- 🐳 Dockerized Node.js application
- 🔄 CI/CD with GitHub Actions (build → push → deploy)
- ⚙️ Infrastructure provisioned using Terraform
- 📦 Server configuration automated with Ansible
- 🔧 GitOps CD pipeline with ArgoCD
- 🧪 Branch-based environment control (e.g. `blue`, `green`, `main`)


## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| CI/CD | GitHub Actions |
| Containerization | Docker |
| IaC | Terraform (non-modular) |
| Configuration Management | Ansible |
| Orchestration | Kubernetes (Minikube) |
| Deployment | Helm, ArgoCD |
| Version Control | Git |


## 📂 Directory Structure

.
├── .github/workflows/                # GitHub Actions pipeline
├── ansible/                          # Ansible playbooks for configuration
├── helm/
│   ├── workwave-public-chart/       # Helm chart for blue/green app
│   └── my-node-app-chart/           # Helm chart managing active version
├── terraform/                        # Non-modular Terraform for infrastructure
├── Dockerfile                        # Node.js app container config
├── values.yaml                       # Helm values (active version, image tag)
└── README.md

---

## 🧪 How Blue-Green Works in This Project

- Push to `blue` branch → deploys blue version (`my-node-app-blue`)
- Push to `green` branch → deploys green version (`my-node-app-green`)
- Push to `main` → updates service routing using Helm `activeVersion`

Active version switching is managed via a Helm chart + config.


## 🔁 CI/CD Workflow Overview

1. **On Push (blue, green, or main)**:
    - Build Docker image
    - Push to Docker Hub
    - Helm deploy to Minikube via ArgoCD
    - (Optional) Toggle active version on `main` branch

2. **ArgoCD** continuously syncs the repo and applies changes to the cluster.


## 💻 Local Deployment (Minikube)

### 1. Start Minikube

```bash
minikube start --driver=docker --cpus=4 --memory=6g

2. Install ArgoCD

kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

3. Access ArgoCD Dashboard

kubectl port-forward svc/argocd-server -n argocd 8080:443

Visit: https://localhost:8080

4. Login to ArgoCD

kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | base64 --decode

Username: admin
Password: (output from above)

🧰 Infrastructure Setup (Terraform + Ansible)

Terraform

cd terraform
terraform init
terraform apply

Ansible

cd ansible
ansible-playbook -i inventory.yaml setup.yml

📦 Docker Build (Manual)

docker build -t yourname/my-node-app:latest .
docker push yourname/my-node-app:latest

📈 Status

✅ Infrastructure: Working on Minikube
✅ CI Pipeline: Active and running
🟡 Helm activeVersion switch tested manually
🟢 ArgoCD: Syncing and deploying charts correctly


Future Improvements
	✅ Modularize Terraform
	🔐 Add HTTPS ingress via cert-manager
	☁️ Migrate to EKS or GKE
	🧪 Add automated testing stages in CI

👤 Author

Queensley Ademola
Site Reliability / DevOps Engineer
LinkedIn | GitHub
